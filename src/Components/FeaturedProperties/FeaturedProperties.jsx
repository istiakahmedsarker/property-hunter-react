import { useEffect, useState } from 'react';
import PropertiesCard from '../../Features/Properties/Components/PropertiesCard/PropertiesCard';
import axios from 'axios';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const FeaturedProperties = () => {
  const [featuredPropertiesData, setFeaturedPropertiesData] = useState([]);

  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://property-hunter-server-roan.vercel.app/api/v1/properties/top-favored');
        const data = response.data?.data;
        setFeaturedPropertiesData(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    // Call the function
    fetchData();
  }, []);

  return (
    <div className='my-10'>
      <SectionTitle
        title="Featured Property"
        subTitle="Explore the Most Featured Items"
      />
      <div  className='max-w-7xl mx-auto '>
        <Swiper {...swiperParams}>
          {featuredPropertiesData.map((property, index) => (
            <SwiperSlide key={index}>
              <PropertiesCard card={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default FeaturedProperties;