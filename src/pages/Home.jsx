import { useEffect, useState } from "react";
import ProductArticle from "../components/ProductArticle";
import LinkButton from "../components/LinkButton";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Opening from "../components/opening";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://hifihorizon-db.onrender.com/products/")
            .then(res => res.json())
            .then(data => {
                // Vælg 4 tilfældige produkter
                const shuffled = data.sort(() => 0.5 - Math.random());
                setProducts(shuffled.slice(0, 4));
            });
    }, []);

    return (
        <>
            <Hero />
            <section className="PopularProducts grid grid-cols-4 gap-x-8 w-full p-14 bg-BgSlightGrey">
                <header className="flex col-span-4 justify-between">
                    <h2 className="text-4xl uppercase font-bold m-8 ">
                        Popular Products
                    </h2>
                    <LinkButton to="/produkter" color='Orange'> See all products</LinkButton>
                </header>
                {products.map(product => (
                    <ProductArticle
                        key={product.id}
                        id={product.id}
                        btnText="Read More"
                        name={product.productname}
                        price={product.pris}
                        description={product.producent}
                        image={product.image}
                        stock={product.stock}
                        isProductsPage={false}
                    />
                ))}
            </section>
            <section>
                <Opening />
            </section>
            <section className='p-10 bg-BgSlightGrey'>
                <Newsletter />
            </section>
        </>
    );
}