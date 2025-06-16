import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
import Button from "../components/button"
export default function Home() {

    return (
        <>
            <Hero />

            <section className="PopularProducts">
                <h2>Popular Products</h2>
                <Button text="see all products"/>


                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
            </section>
        </>
    )
}

//ProductArticle skal fetceh data fra en API