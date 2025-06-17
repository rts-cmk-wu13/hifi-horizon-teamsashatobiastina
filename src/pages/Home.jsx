import Newsletter from '../components/Newsletter';
import Opening from '../components/opening';
import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
import Button from "../components/button";

export default function Home() {

    return (
        <>
            <Hero />

            <section className="PopularProducts grid grid-cols-4 bg-gray-200">
                <header className="flex col-span-4">
                    <h2 className="text-4xl uppercase font-bold m-8 ">
                        Popular Products
                    </h2>
                    <Button
                        text="See all products"
                        className="justify-self-end"
                    />
                </header>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>

   
            </section> 
                   <Opening />
                <Newsletter />
           

        </>

    )
}

/* ProductArticle skal fetceh data fra en API */