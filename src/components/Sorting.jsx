export default function Sorting({ filterProduct, activeCategory, products }) {
  const brands = ["All", ...new Set(products.map((p) => p.producent))];

  return (
    <section className="bg-BtnLightGrey">
      <ul className="flex gap-8 tracking-wide uppercase overflow-visible">
        <li className="relative group cursor-pointer">
          <span className="block">Brand</span>
          <div className="absolute hidden group-hover:flex flex-col top-auto left-0 bg-BtnLightGrey text-black py-5 px-8 shadow-lg z-50 w-auto">
            {brands.map((brand) => (
              <button
                key={brand}
                className={`button-value ${activeCategory === brand ? "active" : ""}`}
                onClick={() => filterProduct(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}