export default function Button({ text, bgColor = 'Black' }) {
  const bgClassMap = {
    ElmBg: 'bg-ElmBg',
    Bg: 'bg-Bg',
    BtnLightGrey: 'bg-BtnLightGrey',
    BtnDarkGrey: 'bg-BtnDarkGrey',
    Black: 'bg-Black',
    BtnOrange: 'bg-BtnOrange',
  };

  const bgClass = bgClassMap[bgColor] || 'bg-Black'; // fallback to black if invalid

  return (
    <button className={`${bgClass} text-black px-4 py-2 rounded`}>
      {text}
    </button>
  );
}
