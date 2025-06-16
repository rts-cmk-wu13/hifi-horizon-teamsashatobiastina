import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
import Button from "../components/Button";

export default function Home() {

    return (
        <>
            <Hero />

            <section className="PopularProducts">
                <h2>Popular Products</h2>
                <Button />


                <ProductArticle></ProductArticle>
                <ProductArticle></ProductArticle>
                <ProductArticle></ProductArticle>
                <ProductArticle></ProductArticle>
            </section>
        </>
    )
}

//ProductArticle skal fetceh data fra en API