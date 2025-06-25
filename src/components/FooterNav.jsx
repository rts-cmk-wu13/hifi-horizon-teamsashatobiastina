import { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaAlignJustify } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function FooterNav() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleInput = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(false);
    if (location.pathname === "/produkter") {
      navigate(`?q=${encodeURIComponent(query)}`);
    } else {
      navigate(`/produkter?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>

      {showSearch && (
        <form
          onSubmit={handleSubmit}
          className="fixed left-0 right-0 bottom-20 z-[60] flex justify-center items-center"
        >
          <input
            type="search"
            autoFocus
            className="w-full max-w-md py-2 text-black text-sm bg-white border-none"
            placeholder="Search a product"
            value={query}
            onChange={handleInput}
            onBlur={() => setShowSearch(false)}
          />
        </form>
      )}


      {showMenu && (
        <div className="fixed  w-1/2 right-0 bottom-15 z-[60] flex flex-col items-center gap-12 bg-black text-white py-4 shadow-lg">
             <NavLink
            to="/" 
            className="py-2 w-full text-center hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          > <img className="flex justify-self-center" src="public/logo_sml 1.svg" alt="" /></NavLink>
          <NavLink
            to="/produkter"
            className="py-2 w-full text-center hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 w-full text-center hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 w-full text-center hover:bg-gray-100 pb-25"
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 w-full bg-black text-white flex justify-around items-center py-5 z-50 shadow-lg">
        <button
          className="flex flex-col items-center text-xs focus:outline-none"
          onClick={() => setShowSearch((v) => !v)}
        >
          <FaSearch size={19} />
        </button>
        <NavLink to="/profile" className="flex flex-col items-center text-xs">
          <FaUser size={19} />
        </NavLink>
        <NavLink to="/cart" className="flex flex-col items-center text-xs">
          <FaShoppingCart size={19} />
        </NavLink>
 <button
  className="flex flex-col items-center text-xs focus:outline-none"
  onClick={() => setShowMenu((v) => !v)}
>
  {showMenu ? (
    <IoMdClose className="block md:hidden  fill-BtnOrange" size={22} />
  ) : (
    <FaAlignJustify className="block md:hidden  " size={22} />
  )}
</button>
      </nav>
    </>
  );
}