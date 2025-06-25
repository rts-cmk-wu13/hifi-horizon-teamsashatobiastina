import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaAlignJustify  } from "react-icons/fa";

import { NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/produkter") {
      navigate(`?q=${encodeURIComponent(query)}`);
    } else {
      navigate(`/produkter?q=${encodeURIComponent(query)}`);
    }
  };

  return (
<div className="bg-white text-black md:bg-black md:text-white px-2 py-4 sm:px-8 sm:py-6 ">
      <nav className="flex flex-col sm:flex-row justify-between items-center font-light text-xs gap-4 sm:gap-0">

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
          <NavLink to="/" className="mb-2 sm:mb-0">
            <figure className="flex items-center">
              <img src="public/logo_sml 1.svg" alt="Logo" className="w-14 sm:w-16" />
            </figure>
          </NavLink>
              <FaAlignJustify className="block md:hidden mt-2" size={28} />
<ul className="hidden md:flex flex-row gap-8 tracking-wide uppercase overflow-visible">
            <li className="relative group cursor-pointer">
              <NavLink to="/produkter" className="hover:underline pb-2 sm:pb-0 pr-2">Shop</NavLink>
              <div className="absolute hidden group-hover:flex flex-col top-8 sm:top-16 left-0 bg-white text-black py-5 px-8 shadow-lg z-50 w-64">
                <h3 className="font-bold text-lg mb-4">Browse Categories</h3>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">CD Players</a>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">DVD Players</a>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">Preamps</a>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">Speakers</a>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">Turntables</a>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">Integrated Amplifiers</a>
                <a href="#" className="text-[#8a6d3b] hover:underline py-1 text-lg">Power Amplifiers</a>
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

     
<div className="hidden md:flex items-center gap-4 sm:gap-10 w-full sm:w-auto justify-end">

          <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full max-w-xs">
            <label htmlFor="product" className="flex items-center cursor-pointer">
              <FaSearch />
            </label>
            <input
              type="search"
              id="product"
              name="q"
              className="px-2 py-1 text-black bg-white rounded w-full"
              placeholder="Search a product"
              value={query}
              onChange={handleInput}
            />
          </form>

          <div className="flex gap-3">
            <FaUser className="cursor-pointer" size={20} />
            <div className="relative cursor-pointer">
              <FaShoppingCart size={20} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}