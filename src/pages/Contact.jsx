import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <>
    <h2 className= "mx-16 col-span-4 text-7xl font-semibold py-18  uppercase self-center text-BtnDarkerGrey">
        get in touch with us</h2>
    <section className="shadow-(--prodArticle)  mx-16 ">
      <ContactForm />
      </section>
      <h1 className="text-center text-3xl mt-10 font-medium">Visit our sister companies <span className="text-BtnOrange">Home Sound</span> and <span className="text-BtnOrange">The Movie Rooms</span> part of the HiFi Horizon Group. </h1>
    </>
  );
}