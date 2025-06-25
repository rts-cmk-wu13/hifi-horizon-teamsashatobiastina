import { Form, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext"
import { useState } from "react";



export default function LoginForm() {
const [error, setError] = useState(null);
const {login } = useAuth();
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || "/";
//console.log(location.state)
console.log(from)

async function handleLogin(event) {
    event.preventDefault()
    //console.log(event.target.password.value)
    const formData = new FormData(event.target)
   const data = Object.fromEntries(formData)

   console.log(data)

//validering her

const response = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data) // dataen tages fra formens brugernavn og adgangskode
   })

   const userdata = await response.json()

   console.log(userdata); // Debugging: Tjek serverens svar
    
    if (!response.ok) {
      setError(userdata.message || userdata.error || "Login failed, use valid credentials");
   
    } else {
        login(userdata.accessToken)
        navigate(from, {replace: true}) //replace: true for at undgå at brugeren kan gå tilbage til login siden
    }

   console.log(userdata)

}

    return (
        <section className="bg-ElmBg p-8 md:p-12 md:mx-14 mx-4 shadow-(--prodArticle) mb-8">
        <h3 className="text-2xl uppercase mb-2 font-semibold">Registered Customers</h3>
        <p>If you have an account, sign in with your email address.</p>
        
        <Form onSubmit={handleLogin} className="flex flex-col gap-6 text-lg mt-6 my-14 
        text-m md:text-lg mt-6 w-[100%] md:w-[80%] lg:w-[60%]">
        <div > 
            <label className="text-black font-bold" htmlFor="email">Email <span className="text-red-500">*</span></label>
            <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-full h-12" type="email" name="email" id="email"/>
        </div>

        <div > 
            <label className="text-black font-bold" htmlFor="password">Password <span className="text-red-500">*</span></label>
            <input className="bg-BtnLightGrey shadow-(--prodArticle) w-full block h-12" type="password" name="password" id="password"/>
        </div>

        <div>
            <input className="appearance-none mr-2 border-white h-5 w-5 shadow-(--prodArticle) bg-BtnLightGrey border-BtnOrange rounded checked:bg-BtnOrange checked:border-BtnOrange focus:outline-none" type="checkbox" name="remember" id="remember"/>
            <label className="text-black" htmlFor="remember">Remember me</label>
        </div>

        {error && (<div>{error}</div>)}
        <button className="text-ElmBg bg-BtnOrange w-36 h-12 rounded-sm shadow-(--prodArticle) block font-thin mt-8" type="submit">Log in</button>
        
        <p>Forgot your password?</p>
        </Form>
        </section>
    )
}