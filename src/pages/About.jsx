import History from "../components/History.jsx";

export default function About() {
  return (
    <>
    <h2 className= "mx-16 col-span-4 text-7xl font-semibold py-18  uppercase self-center text-BtnDarkerGrey">
        OUR HISTORY</h2>
    <section className="shadow-(--prodArticle) mx-16">

      <History />
    </section>
    </>
  );
}