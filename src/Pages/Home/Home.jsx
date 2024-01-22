import React from 'react';
import Banner from '../../Components/Banner/Banner'
import Testimonials from '../../Components/Testimonials/Testimonials'
import CommentTemplate from '../../Components/Comments/Comments';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Testimonials/>
            <CommentTemplate/>
        </div>
    );
};

export default Home;