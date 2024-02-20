import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactWithOwner = ({ details }) => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cjtfbmg',
        'template_fpkjr1s',
        e.target,
        'fJR_7t3flBiWDBu04'
      )
      .then(
        result => {
          console.log(result.text);
          console.log('message sent');
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="py-5">
      <div className="flex justify-start items-center my-5 gap-4">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
            alt=""
            className="w-20 h-20"
          />
        </div>
        <div>
          <h3>{details.ownerInformation.name}</h3>
          <h3>Property Owner</h3>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 w-full mx-auto"
      >
        <input
          className="input input-bordered focus:outline-none focus:border-red-500 w-full py-2 "
          type="text"
          placeholder="Your Name"
          name="users_name"
        />
        <input
          className="input input-bordered focus:outline-none focus:border-red-500 w-full py-2 "
          type="email"
          placeholder="Your Email"
          name="users_email"
        />
        <input
          className="input input-bordered focus:outline-none focus:border-red-500 w-full py-2 "
          type="number"
          placeholder="Your Phone No"
          name="users_phone"
        />
        <textarea
          className="textarea textarea-bordered focus:outline-none focus:border-red-500 w-full py-2"
          name="message"
          placeholder="I am interested to..."
        />
        <input
          className="w-full px-4 py-3 text-white bg-[#eb6753] my-4 rounded-sm"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactWithOwner;
