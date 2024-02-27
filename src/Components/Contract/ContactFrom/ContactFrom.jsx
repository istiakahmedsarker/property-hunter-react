import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
    .sendForm('service_ughdi7l', 'template_6i8xsgh', form.current, {
      publicKey: 'titDrKbThG2GbQDRw',
    })
    .then(
      (result) => {
        console.log(result.text);
        if (result.text === "OK") {
          form.current.reset();
          navigate('/');
          toast.success("Email send Successfully");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  
  };

  return (
    <div className="">
      <form ref={form} onSubmit={handleEmailSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="user_first_name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                  name="user_last_name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="example@example.com"
                  name="user_email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  name="user_message"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="flex justify-end w-full px-3">
                <button
                  className="shadow bg-primary-light hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
    </div>
  );
};

export default ContactForm;
