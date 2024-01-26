import React from 'react';
// import Banner from '../../Components/Banner/Banner'
import Testimonials from '../../Components/Testimonials/Testimonials'
import CommentTemplate from '../../Components/Comments/Comments';
import Banner from '../../Components/Banner2/Banner';

const Home = () => {
    return (
        <div>
            {/* <Banner/> */}
            <Banner/>
            <Testimonials/>
            <CommentTemplate/>
        </div>
    );
};

export default Home;