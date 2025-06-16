export default function Button({ text, bgColor = 'Black' }) {
  return (
    <button className={` px-4 py-2 m-5 rounded bg-BtnOrange text-white`}>
      {text}
    </button>
  );
}
