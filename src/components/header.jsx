export default function Header(){

return(
<>
<nav>
    <figure>
    <img src="" alt="" />  
      </figure>
    <ul>
        <li>Shop</li>
              <li>About Us</li>
                    <li>contact us</li>
    </ul><search>
    <form action="./search/">
      <label for="product">Search a product  <FaSearch /></label>
      <input type="search" id="product" name="q" />
      <button type="submit">Search</button>
    </form>
</search>
<img src="<FaUser />" alt="" />
<img src="<FaCartShopping />" alt="" />
</nav>

</>



)

}