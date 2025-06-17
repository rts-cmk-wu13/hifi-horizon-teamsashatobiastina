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
                            <ProductArticle btntext='add to card' />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                        <li>
                            <ProductArticle />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}