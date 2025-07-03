import  { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import axios from 'axios'

function ContactMe() {
    const [form, setForm] = useState({
        name: "",
        message: "",
        phone: "",
        emailid:  ""
    });
    const [submitted, setSubmitted] = useState(false);
    const phoneNum: number = 919900346107
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value: string | undefined) => {
        setForm({ ...form, phone: value || "" });
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const sendForm = async () => {
          try{
            const response = await axios.post('http://localhost:1337/api/formsubmissions', {data:{
              name: form.name,
              message: form.message,
              phonenum: form.phone,
              emailid: form.emailid
          }})
          console.log(response)

          const text = `Hello, my name is ${form.name}. ${form.message}`;
          const encodedText = encodeURIComponent(text);
          
          const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
          
          const whatsappUrl = isMobile
            ? `https://wa.me/${phoneNum}?text=${encodedText}` 
            : `https://web.whatsapp.com/send?phone=${phoneNum}&text=${encodedText}`; 
          
          window.open(whatsappUrl, "_blank");
          
          }
          catch(error: any){
            console.log("Error submitting form",error);
          }
        }
        setSubmitted(true);
        sendForm();
    };

    return (
    <div>
        <section className="w-full min-h-[70vh] flex items-center justify-center bg-cardlight font-elareg py-20">
      <div className="max-w-lg w-full px-6 py-16 mx-auto bg-brownfore rounded-xl shadow-lg">
        <h2 className="text-textmain text-2xl md:text-3xl font-semibold mb-6 text-center">
          Contact Me
        </h2>
        {submitted ? (
          <div className="text-green-500 text-center text-lg py-10">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-textmain mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-textmain bg-transparent text-textmain focus:outline-none focus:ring-2 focus:ring-textdark"
              />
            </div>
            <div>
              <label htmlFor="emailid" className="block text-textmain mb-2">
                Email ID
              </label>
              <input
                id="emailid"
                name="emailid"
                type="email"
                required
                value={form.emailid}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-textmain bg-transparent text-textmain focus:outline-none focus:ring-2 focus:ring-textdark"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-textmain mb-2">
                Phone Number
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={form.phone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-2 rounded-lg border border-textmain bg-transparent text-textmain focus:outline-none focus:ring-2 focus:ring-textdark"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-textmain mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-textmain bg-transparent text-textmain focus:outline-none focus:ring-2 focus:ring-textdark"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-lg bg-coffee text-textmain font-medium shadow transition hover:bg-cardlight"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
    </div>
  )
}

export default ContactMe