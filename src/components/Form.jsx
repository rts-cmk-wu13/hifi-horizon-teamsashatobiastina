export default function ContactForm() {
  return (
    <>

    <h1 className="mx-16 pt-16 text-7xl font-semibold text-BtnDarkerGrey uppercase mb-12">Get in touch with us</h1>
    <div className="bg-ElmBg p-10 mx-7   ">
      <form className="flex flex-col gap-6 text-lg font-bold uppercase " action="" method="get">
        <div className="flex-col  flex gap-4">
          <label className="block" htmlFor="name  ">Full name * </label>
          <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-10 " type="text" name="name" id="name" required />
        </div>
        <div className="flex-col  flex gap-4">
          <label className="block" htmlFor="Email">Email * </label>
          <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-10" type="email" name="email" id="email" required />
        </div>
  <div className="flex-col  flex gap-4">
  <label className="block" htmlFor="subject"> subject *</label>
  <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-10"   id="subject" name="subject"  required />
</div>
     <div className="flex-col  flex gap-4 ">
  <label className="block" htmlFor="message">message *</label>
  <textarea className="bg-BtnLightGrey shadow-(--prodArticle) block w-[90%] h-40"   id="message" name="message" rows="5" cols="33" required />
</div>
<div className="flex justify-end">

  
      <input className="text-ElmBg bg-BtnOrange w-36 h-12 rounded-sm shadow-(--prodArticle) block font-thin my-10" type="submit" value="Submit"></input>
</div>
      </form>
      </div>
    </>
  );
}