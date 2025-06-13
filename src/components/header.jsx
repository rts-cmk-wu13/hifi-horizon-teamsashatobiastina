//import {  } from 'react-icons/fa6';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

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

    </form>
</search>
<FaUser />
<FaShoppingCart />
</nav>

</>



)

}