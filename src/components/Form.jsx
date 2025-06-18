export default function ContactForm() {
  return (
    <>
    <div className="bg-ElmBg p-5 text-left justify-start  ">
      <form className="flex gap-5 flex-col text-left" action="" method="get">
        <div className="">
          <label htmlFor="name  ">Full name: </label>
          <input className="bg-BtnLightGrey shadow-(--prodArticle) " type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="Email">Email: </label>
          <input className="bg-BtnLightGrey shadow-(--prodArticle)" type="email" name="email" id="email" required />
        </div>
  <div>
  <label htmlFor="subject"> subject:</label>
  <input className="bg-BtnLightGrey shadow-(--prodArticle)"  id="subject" name="subject"  required />
</div>
     <div>
  <label htmlFor="message">message</label>
  <textarea className="bg-BtnLightGrey" id="message" name="message" rows="5" cols="33" required />
</div>
<div>

      <input className="bg-BtnOrange" type="submit" value="Submit"></input>
</div>
      </form>
      </div>
    </>
  );
}