import React from 'react';
// import Banner from '../../Components/Banner/Banner'
import Testimonials from '../../Components/Testimonials/Testimonials';
import CommentTemplate from '../../Components/Comments/Comments';
import Banner from '../../Components/Banner2/Banner';
import Chatbot from '../../Components/Chatbot/Chatbot';
import ExploreTypes from '../../Components/ExploreTypes/ExploreTypes';
import LatestBlogHome from '../../Components/LatestBlogHome/LatestBlogHome';

const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Banner />
      <ExploreTypes></ExploreTypes>
      <LatestBlogHome></LatestBlogHome>
      <Testimonials />

      <Chatbot />
    </div>
  );
};

export default Home;
