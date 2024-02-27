import Testimonials from '../../Components/Testimonials/Testimonials';
import Banner from '../../Components/Banner2/Banner';
import ExploreTypes from '../../Components/ExploreTypes/ExploreTypes';
import LatestBlogHome from '../../Components/LatestBlogHome/LatestBlogHome';
import ContactUs from '../../Components/Contract/ContactUs/ContactUs';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
import SellBanner from '../../Components/SellBanner/SellBanner';
import Agents from '../../Components/Agents/Agents';
import BuySellListCard from '../../Components/BuySellListCard/BuySellListCard';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Chatbot from '../../Features/Chatbot/Chatbot';
import PageTitle from '../../Features/PageTitle/PageTitle';

const Home = () => {
  return (
    <div className=" dark:bg-primary-dark ">
      <PageTitle title="Property Hunter || Home"></PageTitle>
      <Banner />
      <ExploreTypes></ExploreTypes>
      <FeaturedProperties></FeaturedProperties>
      <LatestBlogHome></LatestBlogHome>
      <SellBanner />
      <BuySellListCard></BuySellListCard>
      <Testimonials />
      <NewsLetter />
      <WhyChooseUs />
      <Agents />
      <Chatbot />
      <ContactUs />
    </div>
  );
};

export default Home;
