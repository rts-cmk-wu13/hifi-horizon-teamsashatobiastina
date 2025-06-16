import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
export default function Home() {

    return (
        <>
            <Hero />

            <section className="PopularProducts">
                <h2>Popular Products</h2>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
            </section>
        </>
    )
}

//ProductArticle skal fetceh data fra en API