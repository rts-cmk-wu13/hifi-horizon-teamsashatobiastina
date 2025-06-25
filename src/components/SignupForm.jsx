

import { Form } from "react-router";



export default function SignupForm( { onSubmit, error, fieldErrors }) {

    return (
         <section className="bg-ElmBg p-8 md:p-12 md:mx-14 mx-4 shadow-(--prodArticle) mb-8">
                <h3 className="text-2xl uppercase mb-2 font-semibold">Registered Customers</h3>
                <p>If you have an account, sign in with your email address.</p>

                <Form onSubmit={onSubmit} className="grid grid-cols-8 col-span-8 gap-4 text-m md:text-lg mt-6 w-[100%] md:w-[80%] lg:w-[70%]">
                    <div className="col-span-full">
                        <label className="text-black block font-bold" htmlFor="fullname">Full Name <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="text" name="fullname" id="fullname" />
                            {fieldErrors.fullname && (
          <p className="text-red-500 text-sm">{fieldErrors.fullname[0]}</p>
        )}
                    </div>
                    <div className="col-span-8">
                        <label className="text-black block font-bold" htmlFor="address">Address <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="text" name="address" id="address" />
                         {fieldErrors.address && (
          <p className="text-red-500 text-sm">{fieldErrors.address[0]}</p>
        )}
                    </div>
                    <div className="col-span-8">
                        <label className="text-black block font-bold" htmlFor="address2">Address Line 2</label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="text" name="address2" id="address2" />
          
                    </div>

                    <div className="md:col-span-2 col-span-3">
                        <label className="text-black font-bold  block" htmlFor="zipcode">Zip Code <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="text" name="zipcode" id="zipcode" />
                                            {fieldErrors.zipcode && (
          <p className="text-red-500 text-sm">{fieldErrors.zipcode[0]}</p>
        )}
                        
                        
                    </div>

                    <div className="md:col-span-6 col-span-5">
                        <label className="text-black block font-bold" htmlFor="city">City <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full  shadow-(--prodArticle) justify-end h-12" type="text" name="city" id="city" />
                                                              {fieldErrors.city && (
          <p className="text-red-500 text-sm">{fieldErrors.city[0]}</p>
        )}
                    </div>


                    <div className="col-span-4 row-start-5 col-start-1">
                        <label className="text-black block font-bold" htmlFor="country">Country <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle)  h-12" type="text" name="country" id="country" />
                                                              {fieldErrors.country && (
          <p className="text-red-500 text-sm">{fieldErrors.country[0]}</p>
        )}
                    </div>
                    <div className="col-span-4 col-start-5 row-start-5">
                        <label className="text-black block font-bold" htmlFor="phone">Phone No. <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="tel" name="phone" id="phone" />
                                                              {fieldErrors.phone && (
          <p className="text-red-500 text-sm">{fieldErrors.phone[0]}</p>
        )}
                    </div>


                    <div className="col-span-8">
                        <label className="text-black block font-bold" htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="email" name="email" id="email" />
                                                              {fieldErrors.email && (
          <p className="text-red-500 text-sm">{fieldErrors.email[0]}</p>
        )}
                    </div>
                    <div className="col-span-8">
                        <label className="text-black block font-bold" htmlFor="password">Password <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="password" name="password" id="password" />
                                                              {fieldErrors.password && (
          <p className="text-red-500 text-sm">{fieldErrors.password[0]}</p>
        )}
                    </div>
                    <div className="col-span-8">
                        <label className="text-black block font-bold" htmlFor="repeatpassword">Repeat Password <span className="text-red-500">*</span></label>
                        <input className="bg-BtnLightGrey w-full shadow-(--prodArticle) h-12" type="password" name="repeatpassword" id="repeatpassword" />
                                                              {fieldErrors.repeatpassword && (
          <p className="text-red-500 text-sm">{fieldErrors.repeatpassword[0]}</p>
        )}
                    </div>

                    {error && (<div>{error}</div>)}
                    <button className="col-span-3 text-ElmBg bg-BtnOrange w-fit px-8 h-12 rounded-sm shadow-(--prodArticle) block font-thin mt-8 hover:cursor-pointer hover:shadow-lg hover:bg-BtnDarkerGrey" type="submit">Create an Account</button>
                </Form>
            </section>
    )
}