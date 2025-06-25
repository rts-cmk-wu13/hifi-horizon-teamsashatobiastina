import LoginForm from "../components/LoginForm.jsx";
import LinkButton from "../components/LinkButton.jsx";

export default function LoginPage() {

    return (
        <>
            <h2 className="text-7xl font-semibold mb-6 uppercase mx-14 py-8 text-BtnDarkerGrey">Login</h2>
            <LoginForm />

            <section className="bg-ElmBg flex flex-col items-center p-8 md:p-12 md:mx-14 mx-4 shadow-(--prodArticle)">
                <h3 className="text-2xl uppercase mb-2 font-semibold">New Customers</h3>
                <p>If you have an account, sign in with your email address.</p>

                <div className="flex align-end mt-4">
                    <LinkButton to="/signup" color='Orange' type="submit">Create an Account</LinkButton>
                </div>
            </section>
        </>
    )
}