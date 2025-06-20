import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Sorting({ filterProduct, activeCategories, products }) {
  const [open, setOpen] = useState(false);
  const brands = ["All", ...new Set(products.map((p) => p.producent))];

  return (
    <section className="bg-BtnLightGrey">
      <ul className="flex gap-8 tracking-wide uppercase overflow-visible shadow-lg">
        <li className="relative cursor-pointer w-full">
          <span
            className="flex w-full text-left py-3 ml-2 text-xl items-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            Brand
            <span className="ml-4 transition-transform duration-300 flex items-center">
              {open ? (
                <IoIosArrowDown className="w-5 h-5" />
              ) : (
                <IoIosArrowUp className="w-5 h-5" />
              )}
            </span>
          </span>
          <div
            className={`
              absolute left-0 top-full w-full flex flex-col items-start bg-BtnLightGrey text-black shadow-prodArticle z-50 text-left
              transition-all duration-300 ease-in-out
              ${open ? "py-5 px-8 max-h-[500px] pointer-events-auto" : "py-0 px-0 max-h-0 pointer-events-none"}
              overflow-hidden
            `}
          >
            {brands.map((brand) => (
              <label
                key={brand}
                className={`flex items-center w-full cursor-pointer py-1 ${
                  activeCategories.includes(brand) ? "font-bold" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={activeCategories.includes(brand)}
                  onChange={() => filterProduct(brand)}
                  className="hidden"
                />
                <span className="text-left w-full">{brand}</span>
                <span
                  className="inline-flex w-6 h-6 ml-auto border rounded-full border-gray-400 flex-shrink-0 bg-white items-center justify-center"
                >
                  {activeCategories.includes(brand) && (
                    <FaCheck className="text-green-600 w-4 h-4" />
                  )}
                </span>
              </label>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}