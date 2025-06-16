import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
import Button from "../components/button";
export default function Home() {

    return (
        <>
            <Hero />

<<<<<<< HEAD
            <section className="PopularProducts grid grid-cols-4">
                <header className="flex col-span-4">
                    <h2 className="text-4xl uppercase font-bold m-8 ">
                        Popular Products
                    </h2>
                    <Button
                        text="See all products"
                        className="justify-self-end"
                    />
                </header>
=======
            <section className="PopularProducts">
                <h2>Popular Products</h2>
                <Button text="see all products"/>
>>>>>>> 0bb1b875ba1bbe2540bb90b48a22a156e3d910c6


                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
            </section>
        </>
    )
}

//ProductArticle skal fetceh data fra en API