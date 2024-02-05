import React from 'react';
// import Banner from '../../Components/Banner/Banner'
import Testimonials from '../../Components/Testimonials/Testimonials';
import CommentTemplate from '../../Components/Comments/Comments';
import Banner from '../../Components/Banner2/Banner';
import Chatbot from '../../Components/Chatbot/Chatbot';
import ExploreTypes from '../../Components/ExploreTypes/ExploreTypes';

const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Banner />
      <ExploreTypes></ExploreTypes>
      <Testimonials />

      <Chatbot />
    </div>
  );
};

export default Home;
