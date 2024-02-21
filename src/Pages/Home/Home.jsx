import Testimonials from "../../Components/Testimonials/Testimonials";
import Banner from "../../Components/Banner2/Banner";
import Chatbot from "../../Components/Chatbot/Chatbot";
import ExploreTypes from "../../Components/ExploreTypes/ExploreTypes";
import LatestBlogHome from "../../Components/LatestBlogHome/LatestBlogHome";
import ContactUs from "../../Components/Contract/ContactUs/ContactUs";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import SellBanner from "../../Components/SellBanner/SellBanner";
import Agents from "../../Components/Agents/Agents";
import BuySellListCard from "../../Components/BuySellListCard/BuySellListCard";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className=" dark:bg-primary-dark ">
      <Banner />
      <Agents />
      <ExploreTypes></ExploreTypes>
      <FeaturedProperties></FeaturedProperties>
      <LatestBlogHome></LatestBlogHome>
      <BuySellListCard></BuySellListCard>
      <Testimonials />
      <WhyChooseUs />
      <Chatbot />
      <SellBanner />
      <ContactUs />
      <NewsLetter />
    </div>
  );
};

export default Home;
