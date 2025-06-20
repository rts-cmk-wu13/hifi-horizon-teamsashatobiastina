
import { IoGitCompareOutline } from "react-icons/io5";
//import ProductPic from '../assets/Produktbilleder/cd_afspillere/creek_classic_cd.jpg';
import Button from './Button';
import { NavLink } from "react-router-dom";
//import LinkButton from './LinkButton';

export default function ProductArticle({ id, btnText, isProductsPage, stock, name, price, description, image }) {
    // Bestem lagerstatus og farve
    const stockStatus = stock === 3 ? 'In stock' : stock === 1 ? 'Sold Out' : 'Low stock';
    const stockColor = stock === 3 ? 'bg-green-500' : stock === 1 ? 'bg-red-500' : 'bg-yellow-500';

    return (
        <NavLink to={`/produkter/${id}`} className="block transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <article className='grid grid-cols-2 items-center bg-white shadow-(--prodArticle) h-100 rounded-sm'>
                {/* Compare button in top-right corner */}
                {isProductsPage && (
                    <button className="col-2 flex gap-2 justify-end mt-2 text-black px-2 py-1 rounded">
                        Compare <IoGitCompareOutline />
                    </button>
                )}

                <img src={image} alt="product image" className='m-6 col-span-2 justify-self-center w-auto max-h-[130px]' />
                <h3 className="justify-self-center col-span-2">{name}</h3>
                <p className='mb-6 col-span-2 justify-self-center'>{description}</p>
                <p className='text-2xl mb-2 col-span-2 justify-self-center'>{price} kr</p>

                {/* Stock information next to the button */}
                <div className="flex justify-center mb-6 gap-2 col-span-2">
                    <Button to="/products:id" color='Orange' className="col-1" id="linkButton" text={btnText}>
                    </Button>
                    {isProductsPage && (
                        <div className="flex items-center gap-1 col-2 mr-4">
                            <span className={`w-4 h-4 rounded-full inline-block ${stockColor}`}></span>
                            <span className="text-xs text-gray-600">{stockStatus}</span>
                        </div>
                    )}
                </div>
            </article>
        </NavLink>
    );
}

/*
// fetch produkter fra en API

    <article>
            <img src={image} alt="product image" />
            <h3>{productname}</h3>
            <p>{udgange}</p>
            <p>{price}</p>
            <Button/>
        </article>

    )
}*/

