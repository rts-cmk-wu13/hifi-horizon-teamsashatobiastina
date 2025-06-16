
import ProductPic from '../assets/Produktbilleder/cd_afspillere/creek_classic_cd.jpg'
import Button from './button';

export default function ProductArticle() {

    return (
        <article>
            <img src={ProductPic} alt="product image" />
            <h3>Et produktnavn</h3>
            <p>en udgang</p>
            <p>4000 kr</p>
            <Button/>
        </article>
    )
}
// fetch produkter fra en API

/*
    <article>
            <img src={image} alt="product image" />
            <h3>{productname}</h3>
            <p>{udgange}</p>
            <p>{price}</p>
            <Button/>
        </article>
        */