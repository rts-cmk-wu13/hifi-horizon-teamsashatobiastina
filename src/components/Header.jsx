import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-black text-white px-8 py-6  ">
      <nav className="flex justify-between items-center font-light text-xs ">
        {/* Logo + Nav */}
        <div className="flex items-center gap-5  ">
          <figure className="flex items-center  ">
            <img src="public/logo_sml 1.svg" alt="Logo" className="w-16 " />
          </figure>

          <ul className="flex gap-8 tracking-wide uppercase">
            <li className="cursor-pointer hover:underline" ><NavLink to='/produkter'> Shop</NavLink></li>
            <li className="cursor-pointer hover:underline"> <NavLink to='/about'>About Us</NavLink></li>
            <li className="cursor-pointer hover:underline"> <NavLink to='/contact'>Contact Us </NavLink></li>
          </ul>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-10">
          {/* Search */}
          <form action="./search/" className="flex items-center space-x-2">
            <label htmlFor="product" className="flex items-center cursor-pointer">
              <FaSearch />
            </label>
            <input
              type="search"
              id="product"
              name="q"
              className=" px-2 py-1 text-black bg-white"
              placeholder="Search a product"
            />
          </form>

          {/* Icons */}
          <div className="flex gap-3">
  <FaUser className="cursor-pointer" size={20} />
  <div className="relative cursor-pointer mr-10"> 
    <FaShoppingCart size={20} />
  </div>
</div>
        </div>
      </nav>
    </div>
  );
}
