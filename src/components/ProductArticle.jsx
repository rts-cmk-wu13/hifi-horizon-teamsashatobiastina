
import ProductPic from '../assets/Produktbilleder/cd_afspillere/creek_classic_cd.jpg'
import Button from './button';

export default function ProductArticle() {

    return (

        <article className='flex flex-col items-center bg-white'>
            <img src={ProductPic} alt="product image"
            className='m-6'/>
            <h3>Et produktnavn</h3>
            <p className='mb-6'>
                en udgang</p>
            <p className='text-2xl mb-2'>
                4000 kr</p>
            <Button text="Read more"/>
        </article>
    )
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

