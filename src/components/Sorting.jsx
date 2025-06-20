export default function Sorting({ filterProduct, activeCategory }) {
  return (
    <section className="bg-BtnLightGrey ">

<ul className="flex gap-8 tracking-wide uppercase overflow-visible">
  <li className="relative group cursor-pointer">
    <span className="block ">Brand</span> 
    
    <div className="absolute hidden group-hover:flex flex-col top-auto left-0 bg-BtnLightGrey text-black py-5 px-8 shadow-lg z-50 w-auto">
      <button
        className={`button-value ${activeCategory === "All" ? "active" : ""}`}
        onClick={() => filterProduct("All")}
      >
        All
      </button>
      <button
        className={`button-value ${activeCategory === "creek" ? "active" : ""}`}
        onClick={() => filterProduct("creek")}
      >
        Creek
      </button>
      <button
        className={`button-value ${activeCategory === "parasound" ? "active" : ""}`}
        onClick={() => filterProduct("parasound")}
      >
        Parasound
      </button>
      <button
        className={`button-value ${activeCategory === "manley" ? "active" : ""}`}
        onClick={() => filterProduct("manley")}
      >
        Manley
      </button>
    </div>
  </li>
</ul>

    </section>
  );
}