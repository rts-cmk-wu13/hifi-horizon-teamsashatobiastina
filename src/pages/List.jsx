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
import { useState } from "react";
import products from "../data.json";
import Sorting from "../components/Sorting";
import ProductArticle from "../components/ProductArticle";

export default function List() {
  const [filtered, setFiltered] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterProduct = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter(
          (item) => item.producent.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  return (
    <section className="grid grid-cols-4 p-12 bg-BgSlightGrey gap-x-8">
                     <h2 className="col-span-4 text-7xl text-BtnDarkerGrey font-bold mb-10 uppercase">
                    Products
                </h2>
                <div className="">
                    <h1>sort by</h1>
      <Sorting filterProduct={filterProduct} activeCategory={activeCategory} />
      </div>
                <div className="col-span-3">
      <ul className="grid grid-cols-3 gap-6">
        {filtered.map((product) => (
          <li key={product.id}>
            <ProductArticle
              btnText="Add to cart"
              isProductsPage={true}
              stock={product.stock}
              product={product}
            />
          </li>
        ))}
     </ul> </div>
    </section>
  );
}

