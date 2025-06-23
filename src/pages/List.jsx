import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Sorting from "../components/Sorting";
import ProductArticle from "../components/ProductArticle";
import { useAuth } from "../contexts/Authcontext";


export default function List() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [activeCategories, setActiveCategories] = useState(["All"]);

  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("q") || "");
  }, [location.search]);

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


  };


  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategories.includes("All") ||
      activeCategories.includes(product.producent);
    const matchesSearch =
      product.productname.toLowerCase().includes(search.toLowerCase()) ||
      String(product.id).includes(search);
    return matchesCategory && matchesSearch;
  });

  console.log(products);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>

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
            {filteredProducts.map((product) => (
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
    </>
  );
}
