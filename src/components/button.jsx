//komponent:
export default function Button ({ color="blue", children }) {
  const colors = {
    Orange: "bg-BtnOrange text-white hover:bg-blue-700",
    LightGrey: "bg-BtnLightGrey text-gray-800 hover:bg-gray-300",
    LightGray: "bg-BtnLightGrey text-gray-800 hover:bg-gray-300",
    DarkGrey: "bg-BtnDarkGrey text-gray-800 hover:bg-gray-300",
    DarkGray: "bg-BtnDarkGrey text-gray-800 hover:bg-gray-300",
    DarkerGrey: "bg-BtnDarkerGrey text-gray-800 hover:bg-gray-300",
    DarkerGray: "bg-BtnDarkerGrey text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`px-4 py-2 m-5 rounded text-white ${colors[color]}`}>
      {children}{" "}
    </button>
  );
};

 