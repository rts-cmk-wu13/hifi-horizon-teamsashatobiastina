
import { useEffect, useState } from "react";
import ProductArticle from "../components/ProductArticle";
import { useAuth } from "../contexts/Authcontext";

export default function List() {
    const [products, setProducts] = useState([]); // State til at gemme produkter
    const [isLoading, setIsLoading] = useState(true); // State til loading-indikator

    const { token } = useAuth();

    useEffect(() => {
        // Fetch data fra API
        fetch("http://localhost:4000/products", {
       method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
            .then(response => response.json())
            .then((result) => {
                console.log("API response:", result);
                setProducts(result); 
            })
            .catch((error) => {
                console.error("Error fetching secrets:", error);
            })
            .finally(() => {
                setIsLoading(false); // Stop loading
            });
        }, [token])

    if (isLoading) {
        return <p>Loading...</p>;
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
                                    id={product.id}
                                    btnText="Add to cart"
                                    isProductsPage={true}
                                    stock={product.stock} // Send lagerbeholdning
                                    name={product.productname} // Send produktnavn
                                    price={product.pris} // Send pris
                                    description={product.description} // Send beskrivelse
                                    image={product.image} // Send billede
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}




/*
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
*/
