import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "./Button";
import ProductPic from '../assets/Produktbilleder/cd_afspillere/creek_classic_cd.jpg';
import { IoGitCompareOutline } from "react-icons/io5";
import { useAuth } from "../contexts/Authcontext";
import FooterNav from "./FooterNav";

export default function ProductsDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { token } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then((result) => {
                console.log("API response:", result);
                setProduct(result);
            })
            .catch((error) => {
                console.error("Error fetching secrets:", error);
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    }, [token]);


    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    const stockStatus = product.stock > 3 ? 'In stock' : product.stock > 0 ? 'Low stock' : 'Sold out';
    const stockColor = product.stock > 3 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500';

   return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 px-2 md:px-14 items-center">
     <h2 className="ml-3 pt-4 col-span-1 md:col-span-4 text-3xl md:text-7xl text-BtnDarkerGrey font-bold mb-6 md:mb-10 uppercase">
          Product
        </h2>

        <article className="flex flex-col items-center w-full justify-between gap-8 md:gap-20">
            <div className="flex justify-center w-full items-center gap-2">
                <FaChevronLeft className="text-3xl md:text-6xl text-BtnDarkGrey" />
                <img className="w-75 md:w-100 max-w-full" src={product.image} alt="produktbillede" />
                <FaChevronRight className="text-3xl md:text-6xl text-BtnDarkGrey" />
            </div>
            <div className="flex gap-2 justify-center items-end">
                <p className="w-3 h-3 rounded-full bg-gray-400"></p>
                <p className="w-3 h-3 rounded-full border-2 border-BtnDarkGrey"></p>
                <p className="w-3 h-3 rounded-full border-2 border-BtnDarkGrey"></p>
            </div>
        </article>

        <article className="mx-2 md:mx-18 flex flex-col mt-4 md:mt-0">
            <button className="flex gap-2 mt-2 text-black rounded items-center justify-end cursor-pointer hover:text-BtnOrange">
                Compare <IoGitCompareOutline />
            </button>

            <h2 className="text-2xl md:text-3xl mt-2">{product.productname}</h2>
            <p className="text-lg md:text-xl mb-2 md:mb-4">{product.producent}</p>
            <p className="mb-2">{product.desc}</p>

            {/* FARVER */}
            <div className="flex gap-4 my-2 justify-items-center mt-6 md:mt-8">
                <div className="flex flex-col items-center">
                    <p className="w-6 h-6 rounded-full bg-stone-950"></p>
                    <p className="text-xs mt-2">Black</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="w-6 h-6 rounded-full bg-slate-200"></p>
                    <p className="text-xs mt-2">Silver</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="w-6 h-6 rounded-full bg-yellow-600"></p>
                    <p className="text-xs mt-2">Gold</p>
                </div>
            </div>

            {/* PRIS OG STOCK */}
            <div className="flex flex-col md:flex-row justify-between my-4 gap-2">
                <p className="text-xl md:text-2xl font-semibold">{product.pris} kr.</p>
                <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${stockColor}`}></span>
                    <span className="text-xs text-gray-600">{stockStatus}</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex gap-4" aria-label="Antal produkter">
                    <button className="text-2xl md:text-4xl" type="button" aria-label="Reducér antal">-</button>
                    <span className="self-center text-xs" aria-live="polite" aria-atomic="true">1</span>
                    <button className="text-2xl md:text-4xl" type="button" aria-label="Øg antal">+</button>
                </div>
                <div className="flex justify-center md:ml-auto w-full">
                    <Button color="Orange" text="Add to Card">Add to card</Button>
                </div>
            </div>
        </article>
              <div className="block md:hidden  ">
                            <FooterNav />
                          </div>
    </section>
)
}