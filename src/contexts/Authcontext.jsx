import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [logoutMessage, setLogoutMessage] = useState(""); 
    const [isTokenExpired, setIsTokenExpired] = useState(false); // Tilføj state for token-udløb

    function login(newToken) {
        setToken(newToken);
        sessionStorage.setItem("token", newToken);
        setLogoutMessage(""); // Ryd beskeden ved login
        setIsTokenExpired(false); // Reset token-udløb
    }

    
    function logout(message = "") {
        setToken(null);
        sessionStorage.removeItem("token");
        setLogoutMessage(message); // Sæt beskeden ved logout
        setIsTokenExpired(true); // Marker token som udløbet
    }

    // Tjek om token er udløbet
    function checkTokenExpired(token) {
        if (!token) return true;
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        return payload.exp < now; // Check if token is expired
    }

    useEffect(() => {
        if (checkTokenExpired(token)) {
            logout("Login er udløbet. Log ind igen for at se Secrets."); // Log ud med besked
        }
    }, [token]);



    //const isLoggedIn = !!token; // Evaluerer om token er sand (ikke null eller tom) (tidligere løsning)

    return (

        <AuthContext.Provider value={{ token, logoutMessage, isTokenExpired, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}