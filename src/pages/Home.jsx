import Newsletter from '../components/Newsletter';
import Opening from '../components/opening';
import Hero from "../components/Hero";
import ProductArticle from "../components/ProductArticle";
import Button from "../components/Button";

export default function Home() {

    return (
        <>
            <Hero />

            <section className="PopularProducts grid grid-cols-4 gap-x-8 w-full p-14 bg-BgSlightGrey">
                <header className="flex col-span-4">
                    <h2 className="text-4xl uppercase font-bold m-8 ">
                        Popular Products
                    </h2>
                    <Button className="justify-self-end" color='Orange'>See all products</Button>
                </header>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>
                <ProductArticle text="Read More"></ProductArticle>

   
            </section> 
                   <Opening />
                <Newsletter />
           

            </section>

            <section className='p-10 bg-BgSlightGrey'>
            <Newsletter />
            </section>
        </>

    )
}
/*Button is no longer self closing and uses the prop color to change color*/
/* ProductArticle skal fetceh data fra en API */