import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black text-white px-8 py-6">
      <nav className="flex justify-between items-center font-light text-xs">

        <div className="flex items-center gap-5">
<NavLink to="/">
          <figure className="flex items-center">
            <img    src="public/logo_sml 1.svg" alt="Logo" className="w-16" />
          </figure>
</NavLink>
<ul className="flex gap-8 tracking-wide uppercase overflow-visible">

 <li className="relative group cursor-pointer">
  <NavLink to="/produkter" className="hover:underline pb-15 pr-2">Shop</NavLink>

  <div className="absolute hidden group-hover:flex flex-col top-16 left-0 bg-white text-black py-5  px-8 shadow-lg z-50 w-74">
    <h3 className="font-bold text-lg mb-4">Browse Categories</h3>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">CD Players</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1  text-lg">DVD Players</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1  text-lg">Preamps</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1  text-lg">Speakers</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1  text-lg">Turntables</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1  text-lg">Integrated Amplifiers</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1  text-lg">Power Amplifiers</a>
    <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">Tube Amplifiers</a>
  </div>
</li>

            <li className="cursor-pointer hover:underline">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="cursor-pointer hover:underline">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>


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
              className="px-2 py-1 text-black bg-white"
              placeholder="Search a product"
            />
          </form>

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
