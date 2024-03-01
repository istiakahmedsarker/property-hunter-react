import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
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
          // console.log(result.text);
          // console.log('message sent');
          toast.success('Message send successfully');
        },
        error => {
          // console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="py-5">
      <div className="flex justify-between items-center my-5 gap-4">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
            alt=""
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div>
          <div>
            <h3 className="flex gap-5 py-2">
              <span className="font-semibold"> Name</span>
              <span>: {details.ownerInformation.name}</span>
            </h3>
            <h3 className="flex gap-5 py-2">
              <span className="font-semibold"> Email</span>
              <span>: {details.ownerInformation.email}</span>
            </h3>
            {details.ownerInformation.phone ? (
              <h3 className="flex gap-5 py-2">
                <span className="font-semibold"> Phone</span>
                <span>: {details.ownerInformation.phone}</span>
              </h3>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 w-full mx-auto"
      >
        <input
          className="input input-bordered focus:outline-none focus:border-[#1b7fb9] w-full py-2 "
          type="text"
          placeholder="Your Name"
          name="users_name"
        />
        <input
          className="input input-bordered focus:outline-none focus:border-[#1b7fb9] w-full py-2 "
          type="email"
          placeholder="Your Email"
          name="users_email"
        />
        <input
          className="input input-bordered focus:outline-none focus:border-[#1b7fb9] w-full py-2 "
          type="number"
          placeholder="Your Phone No"
          name="users_phone"
        />
        <textarea
          className="textarea textarea-bordered focus:outline-none focus:border-[#1b7fb9] w-full py-2"
          name="message"
          placeholder="I am interested to..."
        />
        <input
          className="w-full px-5 py-3 text-white bg-[#1b7fb9] my-4 rounded-lg"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactWithOwner;
