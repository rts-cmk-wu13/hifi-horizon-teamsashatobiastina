

export default function ProductArticle({btnText}) {

    return (
        <article className='flex flex-col'>
            <img src={ProductPic} alt="product image" />
            <h3>Et produktnavn</h3>
            <p>en udgang</p>
            <p>4000 kr</p>
            <Button text="Read more"/>
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
            <Button>{btnText}</Button>
        </article>
    )
}
    */