import { useEffect, useState } from "react";
import Sorting from "../components/Sorting";
import ProductArticle from "../components/ProductArticle";
import { useAuth } from "../contexts/Authcontext";

export default function List() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategories, setActiveCategories] = useState(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    fetch("https://hifihorizon-db.onrender.com/products/", {
      method: "GET",
      headers: {
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setFiltered(result); // default filtered list = all
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  const filterProduct = (brand) => {
    let updated;
    if (brand === "All") {
      updated = ["All"];
    } else {
      updated = activeCategories.includes(brand)
        ? activeCategories.filter((b) => b !== brand)
        : [...activeCategories.filter((b) => b !== "All"), brand];
      if (updated.length === 0) updated = ["All"];
    }
    setActiveCategories(updated);

    if (updated.includes("All")) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter((item) => updated.includes(item.producent))
      );
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="grid grid-cols-4 p-12 bg-BgSlightGrey gap-x-8">
      <h2 className="col-span-4 text-7xl text-BtnDarkerGrey font-bold mb-10 uppercase">
        Products
      </h2>
      <div>
        <Sorting
          filterProduct={filterProduct}
          activeCategories={activeCategories}
          products={products}
        />
      </div>
      <div className="col-span-3">
        <ul className="grid grid-cols-3 gap-6">
          {filtered.map((product) => (
            <li key={product.id}>
              <ProductArticle
                id={product.id}
                btnText="Add to cart"
                isProductsPage={true}
                stock={product.stock}
                name={product.productname}
                price={product.pris}
                description={product.desc}
                image={product.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
