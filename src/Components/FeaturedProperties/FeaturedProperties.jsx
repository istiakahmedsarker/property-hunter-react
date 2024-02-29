import { useEffect, useState } from 'react';
import PropertiesCard from '../../Features/Properties/Components/PropertiesCard/PropertiesCard';
import axios from 'axios';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';

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

  const getSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
      return 1;
    } else if (windowWidth <= 840) {
      return 2;
    }
    return 3;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://property-hunter-server-roan.vercel.app/api/v1/properties/top-favored'
        );
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
    <div className="lg:my-10 w-11/12 mx-auto my-7">
      <SectionTitle
        title="Featured Property"
        subTitle="Explore the Most Featured Items"
      />
      <div className="max-w-7xl mx-auto ">
        <Swiper
          {...swiperParams}
          slidesPerView={4}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          // responsiveness
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 3,
            },
          }}
          onInit={swiper => {
            swiper.params.slidesPerView = getSlidesPerView();
            swiper.update();
          }}
          onResize={swiper => {
            swiper.params.slidesPerView = getSlidesPerView();
            swiper.update();
          }}
        >
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
