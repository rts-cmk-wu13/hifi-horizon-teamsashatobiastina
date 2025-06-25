import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Sorting from "../components/Sorting";
import ProductArticle from "../components/ProductArticle";
import { useAuth } from "../contexts/Authcontext";
import FooterNav from "../components/FooterNav";


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

      <section className="grid grid-cols-1 md:grid-cols-4 p-4 md:p-12 bg-BgSlightGrey gap-x-0 md:gap-x-8">
        <h2 className="col-span-1 md:col-span-4 text-3xl md:text-7xl text-BtnDarkerGrey font-bold mb-6 md:mb-10 uppercase">
          Products
        </h2>


        <div className="block md:hidden col-span-1 mb-4">
          <Sorting
            filterProduct={filterProduct}
            activeCategories={activeCategories}
            products={products}
          />
        </div>

    
        <div className="hidden md:block md:col-span-1">
          <Sorting
            filterProduct={filterProduct}
            activeCategories={activeCategories}
            products={products}
          />
        </div>

 
        <div className="col-span-1 md:col-span-3">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
        <div className="block md:hidden  ">
              <FooterNav />
            </div>
    </>
  );
}
