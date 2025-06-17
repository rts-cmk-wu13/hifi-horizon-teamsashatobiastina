import ProductArticle from "../components/ProductArticle";

export default function List() {

    return (
        <>
            <section className="grid grid-cols-4 p-12 bg-BgSlightGrey gap-x-8">
                <h2 className="col-span-4 text-5xl font-bold mb-4 uppercase">
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