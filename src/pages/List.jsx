import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Sorting from "../components/Sorting";
import ProductArticle from "../components/ProductArticle";
import { useAuth } from "../contexts/Authcontext";

export default function List() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    fetch("http://localhost:4000/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="grid grid-cols-4 p-12 bg-BgSlightGrey gap-x-8">
      <h2 className="col-span-4 text-7xl text-BtnDarkerGrey font-bold mb-10 uppercase">
        Products
      </h2>
      <div>
        <Sorting
          filterProduct={filterProduct}
          activeCategory={activeCategory}
          products={products} // only needed if you're generating brand buttons dynamically
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
                description={product.description}
                image={product.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
