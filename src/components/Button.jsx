//komponent:
export default function Button ({ color="blue", text }) {
  const colors = {
    Orange: "bg-BtnOrange text-white hover:shadow-lg",
    LightGrey: "bg-BtnLightGrey text-white-800 hover:shadow-lg",
    LightGray: "bg-BtnLightGrey text-white-800 hover:shadow-lg",
    DarkGrey: "bg-BtnDarkGrey text-white-800 hover:shadow-lg",
    DarkGray: "bg-BtnDarkGrey text-white-800 hover:shadow-lg",
    DarkerGrey: "bg-BtnDarkerGrey text-white-800 hover:shadow-lg",
    DarkerGray: "bg-BtnDarkerGrey text-white-800 hover:shadow-lg",
  };

  return (
    <button className={`px-4 py-2 m-2 w-full max-w-[60%] cursor-pointer rounded shadow-(--prodArticle) text-white ${colors[color]}`}>
      {text}
    </button>
  );
};

 