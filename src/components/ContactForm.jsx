import { useState } from 'react';
import { Form } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  fullname: z.string().min(1, { message: 'Navn er påkrævet' }),
  email: z.string().email({ message: 'Ugyldig email-adresse' }),
  subject: z.string().min(1, { message: 'Emne er påkrævet' }),
  message: z.string().min(1, { message: 'Besked er påkrævet' }),
});

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setSuccessMessage(false);
    } else {
      setErrors({});
      fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data)
      })
        .then(res => res.json())
        .then(() => {
          setSuccessMessage(true);
          setFormData({ fullname: "", email: "", subject: "", message: "" }); // ryd felter
        })
        .catch(error => {
          setSuccessMessage(false);
          console.error("API error:", error);
        });
    }
  };

  return (
    <section className="bg-ElmBg p-12">
      <Form className="flex flex-col gap-6 text-lg font-bold uppercase" method="post" onSubmit={handleSubmit}>
        <div className="flex-col flex gap-2">
          <label htmlFor="fullname">Full name <span className="text-red-500">*</span></label>
          <input
            className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-12"
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname[0]}</p>}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="email">Email <span className="text-red-500">*</span></label>
          <input
            className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-12"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="subject">Subject <span className="text-red-500">*</span></label>
          <input
            className="bg-BtnLightGrey shadow-(--prodArticle) block w-[67%] h-12"
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p style={{ color: 'red' }}>{errors.subject[0]}</p>}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="message">Message <span className="text-red-500">*</span></label>
          <textarea
            className="bg-BtnLightGrey shadow-(--prodArticle) block w-full h-40"
            id="message"
            name="message"
            rows="5"
            cols="33"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message[0]}</p>}
        </div>

        <div className="flex justify-end">
          <input className="text-ElmBg bg-BtnOrange w-36 h-12 rounded-sm shadow-(--prodArticle) block font-thin my-10" type="submit" value="Submit" />
        </div>
        {successMessage && (
          <p style={{ color: 'black', marginTop: '1em', fontSize: '14px' }}>
            Tak for din besked! Vi vender tilbage hurtigst muligt.
          </p>
        )}
      </Form>
    </section>
  );
}