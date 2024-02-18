import {
  MdOutlineApartment,
  MdOutlineMail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();

      emailjs
      .sendForm('service_ughdi7l', 'template_6i8xsgh', form.current, {
        publicKey: 'titDrKbThG2GbQDRw',
      })
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            form.current.reset();
            toast.success("Email send Successfully");
            navigate('/')
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        {/* Contract From */}
        <div className="w-full">
          <div className="bg-white dark:bg-card-dark p-8 rounded shadow-md">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-1 dark:text-in-dark">Contact Us</h3>
              <p className="text-gray-400">We will respond as soon as we receive your message.</p>
            </div>
            <form ref={form} onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name<span className="text-primary-light">*</span></span>
                </label>
                <div className="relative flex items-center ">
                  <FaRegUser className="text-primary-light absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="input input-bordered focus:outline-none focus:border-primary-light w-full py-2 pl-8"
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between mx-auto gap-4">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Email<span className="text-primary-light">*</span></span>
                  </label>
                  <div className="relative flex items-center ">
                    <MdOutlineMail className="text-primary-light absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      className="input input-bordered focus:outline-none focus:border-primary-light w-full py-2 pl-8"
                      placeholder="Your Email"
                      name="user_email"
                      required
                    />
                  </div>
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Phone<span className="text-primary-light">*</span></span>
                  </label>
                  <div className="relative flex items-center ">
                    <MdOutlinePhone className="text-primary-light absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      className="input input-bordered focus:outline-none focus:border-primary-light w-full py-2 pl-8"
                      placeholder="Your Phone"
                      name="user_phone"
                      required
                    />
                  </div>
                </div>
              </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Type<span className="text-primary-light">*</span></span>
                </label>
                <div className="relative flex items-center ">
                  <MdOutlineApartment className="text-primary-light absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <select
                    className="select input-bordered focus:outline-none focus:border-primary-light w-full py-2 pl-8  "
                    defaultValue=""
                    name="user_property"
                    required
                  >
                    <option default selected>
                      Choose
                    </option>
                    <option value="apartment" className="hover:bg-primary-light">
                      Apartment
                    </option>
                    <option value="house" className="">
                      House
                    </option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
              </div> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message<span className="text-primary-light">*</span></span>
                </label>
                <div className="flex items-center">
                  <textarea
                    className="textarea textarea-bordered focus:outline-none focus:border-primary-light w-full py-2"
                    placeholder="Your Message"
                    rows="4"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary-light text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-slate-300"
                >
                  <span className="flex items-center gap-1">
                    <div className="hover:animate-bounce">
                      <FiSend />
                    </div>
                    <span className="hover:animate-none">Send Message</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
