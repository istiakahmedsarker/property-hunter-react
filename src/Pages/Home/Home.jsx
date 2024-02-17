import Testimonials from '../../Components/Testimonials/Testimonials';
import Banner from '../../Components/Banner2/Banner';
import Chatbot from '../../Components/Chatbot/Chatbot';
import ExploreTypes from '../../Components/ExploreTypes/ExploreTypes';
import LatestBlogHome from '../../Components/LatestBlogHome/LatestBlogHome';
import ContactUs from '../../Components/Contract/ContactUs/ContactUs';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';

const Home = () => {

  return (
      <div className='max-w-[1340px] mx-auto px-4 dark:bg-primary-dark ' >
        <Banner/>
        <ExploreTypes></ExploreTypes>
        <FeaturedProperties></FeaturedProperties>
        <LatestBlogHome></LatestBlogHome>
        <Testimonials />
        <Chatbot />
        <ContactUs />
      </div >
  );
};

export default Home;