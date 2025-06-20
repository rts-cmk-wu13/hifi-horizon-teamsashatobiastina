
import { IoGitCompareOutline } from "react-icons/io5";
//import ProductPic from '../assets/Produktbilleder/cd_afspillere/creek_classic_cd.jpg';
import Button from './Button';
import { NavLink } from "react-router-dom";
//import LinkButton from './LinkButton';

export default function ProductArticle({ id, btnText, isProductsPage, stock, name, price, description, image }) {
    // Bestem lagerstatus og farve
    const stockStatus = stock > 3 ? 'In stock' : stock > 0 ? 'Low stock' : 'Sold out';
    const stockColor = stock > 3 ? 'bg-green-500' : stock > 0 ? 'bg-yellow-500' : 'bg-red-500';

    return (
        <NavLink to={`/produkter/${id}`} className="block hover:shadow-lg transition-shadow duration-200">
            <article className='grid grid-cols-2 items-center bg-white shadow-(--prodArticle) rounded-sm'>
                {/* Compare button in top-right corner */}
                {isProductsPage && (
                    <button className="col-2 flex gap-2 justify-end mt-2 text-black px-2 py-1 rounded">
                        Compare <IoGitCompareOutline />
                    </button>
                )}

                <img src={image} alt="product image" className='m-6 col-span-2 justify-self-center' />
                <h3 className="justify-self-center col-span-2">{name}</h3>
                <p className='mb-6 col-span-2 justify-self-center'>{description}</p>
                <p className='text-2xl mb-2 col-span-2 justify-self-center'>{price} kr</p>

                {/* Stock information next to the button */}
                <div className="flex justify-center mb-6 gap-8 col-span-2">
                    <Button to="/products:id" color='Orange' className="col-1" id="linkButton" text={btnText}>
                    </Button>
                    {isProductsPage && (
                        <div className="flex items-center gap-2 col-2 mr-4">
                            <span className={`w-3 h-3 rounded-full ${stockColor}`}></span>
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

