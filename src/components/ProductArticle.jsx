

export default function ProductArticle({btnText}) {

    return (
        <article>
            <img src={image} alt="product image" />
            <h3>{productname}</h3>
            <p>{udgange}</p>
            <p>{price}</p>
            <Button>{btnText}</Button>
        </article>
    )
}