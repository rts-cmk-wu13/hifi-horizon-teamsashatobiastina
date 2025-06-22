import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "./Button";
import ProductPic from '../assets/Produktbilleder/cd_afspillere/creek_classic_cd.jpg';
import { IoGitCompareOutline } from "react-icons/io5";
import { useAuth } from "../contexts/Authcontext";

export default function ProductsDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { token } = useAuth();

    useEffect(() => {
        fetch(`https://hifihorizon-db.onrender.com/products/${id}`, {
            method: "GET",
            headers: {
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
        <section className="grid grid-cols-2 gap-2 px-14 items-center">
            <h1 className="col-span-2 row-1 text-7xl uppercase font-bold text-BtnDarkerGrey mt-8">{product.productname}</h1>

            <article className="flex flex-col items-center w-full justify-between gap-20">

                <div className="flex justify-center w-full items-center gap-2">
                    <FaChevronLeft className="text-6xl text-BtnDarkGrey" />
                    <img className="w-100 max-w-full" src={`https://hifihorizon-db.onrender.com${product.image}`} alt={product.productname} />
                    <FaChevronRight className="text-6xl text-BtnDarkGrey" />
                </div>
                <div className="flex gap-2 justify-center items-end justify-items-end">
                    <p className="w-3 h-3 rounded-full bg-gray-400"></p>
                    <p className="w-3 h-3 rounded-full border-2 border-BtnDarkGrey"></p>
                    <p className="w-3 h-3 rounded-full border-2 border-BtnDarkGrey"></p>
                </div>
            </article>

            <article className="mx-18 flex flex-col">
                <button className="col-2 flex gap-2 mt-2 text-black rounded items-center justify-end cursor-pointer hover:text-BtnOrange">
                    Compare <IoGitCompareOutline />
                </button>

                <h2 className="text-3xl">{product.productname}</h2>

                <p className="text-xl mb-4">{product.producent}</p>
                <p className="mb-2">{product.desc}</p>

                {/*FARVER*/}
                <div className="flex gap-4 my-2 justify-items-center mt-8">
                    <div className="flex flex-col">
                        <p className="w-6 h-6 rounded-full bg-stone-950 place-self-center"></p>
                        <p className="text-xs mt-2">Black</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="w-6 h-6 rounded-full bg-slate-200 place-self-center"></p>
                        <p className="text-xs mt-2">Silver</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="w-6 h-6 rounded-full bg-yellow-600 place-self-center"></p>
                        <p className="text-xs mt-2">Gold</p>
                    </div>
                </div>

                {/*PRIS OG STOCK*/}
                <div className="flex justify-between my-4">
                    <p className="text-2xl font-semibold">{product.pris} kr.</p>
                    <div className="flex items-center gap-2 col-2 mr-4 content-center">

                        <span className={`w-3 h-3 rounded-full ${stockColor}`}></span>
                        <span className="text-xs text-gray-600">{stockStatus}</span>

                    </div>
                </div>

                {/* 
                    <div className="flex">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div> */}

                <div className="flex items-center">

                    <div className="flex gap-4" aria-label="Antal produkter">
                        <button className="text-4xl" type="button" aria-label="Reducér antal">-</button>
                        <span className="self-center text-xs" aria-live="polite" aria-atomic="true">1</span>
                        <button className="text-4xl" type="button" aria-label="Øg antal">+</button>
                    </div>

                    <div className="flex justify-end ml-auto w-full">
                        <Button color="Orange" text="Add to Card">Add to card</Button>
                    </div>
                </div>

            </article>
        </section>
    )
}