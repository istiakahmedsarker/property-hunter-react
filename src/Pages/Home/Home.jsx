import React from 'react';
// import Banner from '../../Components/Banner/Banner'
import Testimonials from '../../Components/Testimonials/Testimonials';
import CommentTemplate from '../../Components/Comments/Comments';
import Banner from '../../Components/Banner2/Banner';
import Chatbot from '../../Components/Chatbot/Chatbot';
import ContactUs from '../../Components/Contract/ContactUs/ContactUs';

const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Banner />
      <Testimonials />

      <Chatbot />
      <ContactUs/>
    </div>
  );
};

export default Home;
