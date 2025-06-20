export default function Sorting({ filterProduct, activeCategory }) {
  return (
    <div id="buttons">
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
  );
}