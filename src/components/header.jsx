//import {  } from 'react-icons/fa6';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header(){

return(
  <>
  <div className="bg-black text-white px-6">
      <nav className="flex items-baseline justify-between py-4">
        {/* Logo */}
        <figure className="flex items-baseline">
          <img src="public/logo_sml 1.svg" alt="Logo" className="h-8" />
        </figure>

        {/* Menu items */}
        <ul className="flex space-x-8 font-normal tracking-wide uppercase gap-16">
          <li className="cursor-pointer hover:underline">Shop</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>

        {/* Spacer to create gap after Contact Us */}
        <div className="mx-8"></div>

        {/* Search form */}
        <form action="./search/" className="flex items-baseline space-x-2">
          <label htmlFor="product" className="flex items-center space-x-1 cursor-pointer">
            <span>Search a product</span>
            <FaSearch />
          </label>
          <input
            type="search"
            id="product"
            name="q"
            className="rounded px-2 py-1 text-black"
            placeholder="Search..."
          />
        </form>

        {/* User and Cart icons */}
        <div className="flex items-center space-x-6 ml-8">
          <FaUser className="cursor-pointer" size={20} />
          <div className="relative cursor-pointer">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black font-bold text-xs">
              2
            </span>
          </div>
        </div>
      </nav>
</div>
</>



)

}