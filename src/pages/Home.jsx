import Newsletter from  '../components/Newsletter';
import Opening from '../components/opening';
import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
import LinkButton from "../components/LinkButton";
import FooterNav from "../components/FooterNav"; 
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 4));
      });
  }, []);

  return (
    <>
      <Hero />

      <section className="PopularProducts grid grid-cols-1 gap-y-8 gap-x-4 w-full px-2 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-6 md:px-10 bg-BgSlightGrey">
        <header className="flex flex-col gap-2 sm:flex-row sm:justify-between col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4  sm:items-center mb-2">
      <h2 className="text-center sm:text-left text-xl sm:text-2xl md:text-4xl uppercase font-bold m-0">
  Popular Products
</h2>
          <LinkButton to="/produkter" color="Orange" className="mt-2 sm:mt-0">
            See all products
          </LinkButton>
        </header>
        {products.map(product => (
          <div key={product.id} className="w-full">
            <ProductArticle
              id={product.id}
              btnText="Read More"
              name={product.productname}
              price={product.pris}
              description={product.producent}
              image={product.image}
              stock={product.stock}
              isProductsPage={false}
            />
          </div>
        ))}
      </section>

      <section>
        <Opening />
      </section>
      <section className="p-4 sm:p-10 bg-BgSlightGrey">
        <Newsletter />
      </section>
      <div className="block md:hidden  ">
        <FooterNav />
      </div>
    </>
  );
}
