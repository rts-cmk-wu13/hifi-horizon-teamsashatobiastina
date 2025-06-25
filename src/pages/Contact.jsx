import ContactForm from "../components/Form.jsx";
import FooterNav from "../components/FooterNav.jsx";
export default function ContactPage() {
  return (
    <>
     <h2 className="ml-3 pt-4 col-span-1 md:col-span-4 text-3xl md:text-7xl text-BtnDarkerGrey font-bold mb-6 md:mb-10 uppercase">
          Get in touch with us
        </h2>
    <section className="shadow-(--prodArticle)  mx-7 md:mx-16   ">
      <ContactForm />
      </section>
      <h1 className="text-center text-3xl mt-10 font-medium">Visit our sister companies <span className="text-BtnOrange">Home Sound</span> and <span className="text-BtnOrange">The Movie Rooms</span> part of the HiFi Horizon Group. </h1>
          <div className="block md:hidden  ">
                    <FooterNav />
                  </div>
    </>
  );
}