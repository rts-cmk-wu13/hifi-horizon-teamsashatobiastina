import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Specific() {
  const { id } = useParams(); // hvis specs er produkt-specifikke
  const [specs, setSpecs] = useState(null);

  useEffect(() => {
    fetch(`https://hifihorizon-db.onrender.com/products/${id}`)
      .then(res => res.json())
      .then(data => setSpecs(data.specs));
  }, [id]);

  if (!specs) return <p>Loading...</p>;

  return (
    <>
      <div className="my-8 mx-16 text-3xl font-semibold uppercase">
        <h1>Product specifications</h1>
      </div>
      <table className="table-auto w-4/10 text-center ml-20 border-separate border-spacing-0">
        <tbody className="divide-y divide-x divide-gray-200">
          {Object.entries(specs).map(([key, value]) => (
            <tr key={key} className="odd:bg-BtnLightGrey even:bg-gray-100">
              <td className="w-4/10 p-2 font-bold border-r-2 border-gray-300">{key}</td>
              <td className="p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}