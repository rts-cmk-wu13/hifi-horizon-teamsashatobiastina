export default function Button({ text}) {

  return (
    <button className={` px-4 py-2 rounded bg-BtnOrange text-white`}>
      {text}
    </button>
  );
}
