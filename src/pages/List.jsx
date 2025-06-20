/*
import { useEffect, useState } from "react";
import ProductArticle from "../components/ProductArticle";

export default function List() {
    const [products, setProducts] = useState([]); // State til at gemme produkter
    const [loading, setLoading] = useState(true); // State til loading-indikator

    useEffect(() => {
        // Fetch data fra API
        fetch("http://127.0.0.1:8000/products/")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Gem produkter i state
                setLoading(false); // Sluk loading-indikator
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading products...</p>; // Vis loading-indikator
    }

    return (
        <>
            <section className="grid grid-cols-4 p-12 bg-BgSlightGrey gap-x-8">
                <h2 className="col-span-4 text-7xl text-BtnDarkerGrey font-bold mb-10 uppercase">
                    Products
                </h2>
                <div>
                    <form action="#">her skal være filtreringsformen</form>
                </div>
                <div className="col-span-3">
                    <ul className="grid grid-cols-3 gap-6">
                        {products.map((product) => (
                            <li key={product.id}>
                                <ProductArticle
                                    btnText="Add to cart"
                                    isProductsPage={true}
                                    stock={product.stock} // Send lagerbeholdning
                                    name={product.name} // Send produktnavn
                                    price={product.price} // Send pris
                                    description={product.description} // Send beskrivelse
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

*/

import ProductArticle from "../components/ProductArticle";

export default function List() {

    return (
        <>
            <section className="grid grid-cols-4 p-12 bg-BgSlightGrey gap-x-8">
                <h2 className="col-span-4 text-7xl text-BtnDarkerGrey font-bold mb-10 uppercase">
                    Products
                </h2>
                <div>
                    <form action="#">her skal være filtreringsformen</form></div>
                <div className="col-span-3">
                    <ul className="grid grid-cols-3 gap-6">
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={1}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={7} />
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={0}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={0}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={10}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={10}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={3}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={10}/>
                        </li>
                        <li>
                            <ProductArticle btnText='Add to cart' isProductsPage={true} stock={3}/>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}