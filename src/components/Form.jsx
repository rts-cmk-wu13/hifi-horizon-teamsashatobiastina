export default function ContactForm() {
  return (
    <>


      <div className="bg-ElmBg p-12   ">
        <form className="flex flex-col gap-6 text-lg font-bold uppercase " action="" method="get">
          <div className="flex-col  flex gap-2">
            <label className="block" htmlFor="name  ">Full name <span className="text-red-500">*</span> </label>
            <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-12 " type="text" name="name" id="name" required />
          </div>
          <div className="flex-col  flex gap-2">
            <label className="block" htmlFor="Email">Email <span className="text-red-500">*</span> </label>
            <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-12" type="email" name="email" id="email" required />
          </div>
          <div className="flex-col  flex gap-2">
            <label className="block" htmlFor="subject"> subject <span className="text-red-500">*</span></label>
            <input className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-12" id="subject" name="subject" required />
          </div>
          <div className="flex-col  flex gap-2 ">
            <label className="block" htmlFor="message">message <span className="text-red-500">*</span></label>
            <textarea className="bg-BtnLightGrey shadow-(--prodArticle) block w-full h-40" id="message" name="message" rows="5" cols="33" required />
          </div>
          <div className="flex justify-end">


            <input className="text-ElmBg bg-BtnOrange w-36 h-12 rounded-sm shadow-(--prodArticle) block font-thin my-10" type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </>
  );
}