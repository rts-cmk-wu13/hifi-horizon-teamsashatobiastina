
import { Form, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/Authcontext"
import { useState } from "react";
import SignupForm from "../components/SignupForm";
import { z } from 'zod';


// Tilpas schema til dine felter!
const schema = z.object({
  fullname: z.string().min(1, { message: 'Navn er påkrævet' }),
  address: z.string().min(1, { message: 'Adresse er påkrævet' }),
  address2: z.string().optional(),
  zipcode: z.string().min(1, { message: 'Postnummer er påkrævet' }).regex(/^\d+$/, { message: 'Postnummer må kun indeholde tal' }),
  city: z.string().min(2, { message: 'By er påkrævet' }),
  country: z.string().min(2, { message: 'Land er påkrævet' }),
  phone: z.string().min(8, { message: 'Telefon er påkrævet' }),
  email: z.string().email({ message: 'Ugyldig email-adresse' }),
  password: z.string().min(6, { message: 'Adgangskode skal være mindst 6 tegn' }),
  repeatpassword: z.string().min(6, { message: 'Gentag adgangskode' }),
}).refine((data) => data.password === data.repeatpassword, {
  message: "Adgangskoderne matcher ikke",
  path: ["repeatpassword"],
});

export default function SignupPage() {
    const [error, setError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    async function handleSubmit(event) {
        event.preventDefault()
        setError(null);
        setFieldErrors({});

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        const result = schema.safeParse(data);

        if (!result.success) {
            setFieldErrors(result.error.flatten().fieldErrors);
            setError(message);
            return;
        }
        // Fjern repeatpassword før POST
        const { repeatpassword, ...userData } = result.data;

        try {
            const response = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData) // dataen tages fra formens brugernavn og adgangskode
            })

            const userdata = await response.json()

            console.log(userdata); // Debugging: Tjek serverens svar

            if (!response.ok) {
                setError(userdata.message || userdata.error || "Sign up failed, use valid information");

            } else {
                login(userdata.accessToken)
                navigate(from, { replace: true }) //replace: true for at undgå at brugeren kan gå tilbage til login siden
            }

            console.log(userdata)
        } catch (err) {
            setError("Der opstod en netværksfejl.");
        }
    }


    return (
        <>
            <h1 className="uppercase text-5xl md:text-5xl lg:text-7xl p-14 text-BtnDarkerGrey font-semibold">Create an Account</h1>
            <SignupForm onSubmit={handleSubmit} error={error} fieldErrors={fieldErrors} />
        </>
    )
}