export default function Profile() {

    return (
        <section className="p-8 bg-white shadow-(--prodArticle) mx-16 flex flex-col gap-4">
            <header className="h-[50px]">
                <nav className="flex">
                    <ul className="flex justify-between w-full bg-BgSlightGrey">
                        <li className="bg-BtnDarkerGrey w-full flex-1 p-2 text-white text-center">Profile</li>
                        <li className="bg-BtnLightGrey w-full flex-1 p-2 text-center">Orders</li>
                    </ul>
                </nav>
            </header>

        <h2 className="uppercase text-4xl justify-center flex-1">Your profile information</h2>

        <ul>
            <li>Name</li>
            <li>Phone Number</li>
            <li>Mail</li>
            <li>Password</li>
            <li>Adress</li>
        </ul>

        </section>
        
    )
}