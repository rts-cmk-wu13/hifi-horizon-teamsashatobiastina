import History from "../components/History.jsx";
import FooterNav from "../components/FooterNav.jsx";
export default function About() {
  return (
    <>
 
        <h2 className="ml-3 pt-4 col-span-1 md:col-span-4 text-3xl md:text-7xl text-BtnDarkerGrey font-bold mb-6 md:mb-10 uppercase">
          Our History
        </h2>
    <section className="shadow-(--prodArticle) mx-8 md:mx-16 ">

      <History />
    </section>
        <div className="block md:hidden  ">
                  <FooterNav />
                </div>
    </>
  );
}