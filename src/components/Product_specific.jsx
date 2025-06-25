import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Specific() {
  const { id } = useParams(); // hvis specs er produkt-specifikke
  const [specs, setSpecs] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then(res => res.json())
      .then(data => setSpecs(data.specs));
  }, [id]);

  if (!specs) return <p>Loading...</p>;

  return (
    <>
      <div className="my-4 text-center mx-4 sm:my-8 sm:mx-16 text-xl sm:text-3xl font-semibold uppercase">
        <h1>Product specifications</h1>
      </div>
      <div className="overflow-x-auto px-2 sm:px-0">
        <table className="table-auto w-auto max-w-xs sm:max-w-lg mx-auto text-center border-separate border-spacing-0 min-w-[220px]">
          <tbody className="divide-y divide-x divide-gray-200">
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key} className="odd:bg-BtnLightGrey even:bg-gray-100">
                <td className="w-1/2 px-2 py-1 font-bold border-r-2 border-gray-300 text-xs sm:text-base">{key}</td>
                <td className="px-2 py-1 text-xs sm:text-base">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}