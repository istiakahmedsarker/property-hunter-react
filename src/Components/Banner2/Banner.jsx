
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Container from '../Container/Container';
import './Banner.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useTheme from '../../Providers/ThemeContext';

const Banner = () => {

  const navigate = useNavigate();
  const { user } = useAuth();
  const images = ["https://i.ibb.co/3N2Y5Fd/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg", "https://i.ibb.co/6tGzzDv/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg", "https://i.ibb.co/dMt9qmj/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg"]
  


  return (
    <div className="min-h-[80vh] md:min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="h-full w-full absolute z-30 bg-[#091538] opacity-50"></div>
      <img
        id="home"
        className=" absolute bottom-0 z-20 h-full w-full object-cover"
        src="https://i.ibb.co/8mTNjxN/New-banner-image-2.jpg"
        alt=""
      />

      <div className="h-full w-full bg-white absolute z-10 opacity-30"></div>
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:px-5">
          <div className="flex-1 z-40 flex flex-col gap-6 items-center lg:gap-12 md:items-start text-center md:text-left">
            <h3 className="text-animation text-sm lg:text-xl xl:text-2xl  text-white dark:text-in-dark">
              Explore Buying, Renting, Investing Opportunities!
            </h3>
            <div className='overflow-hidden h-30'>
              <h1 className="m-0 text-animation text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold dark:text-in-dark">
                Hunt Your <br /> Dream Home
              </h1>
            </div>
            <button onClick={() => {
              if (!user) {
                return navigate('/login')
              } else {
                navigate('/properties')
              }
            }} className='text-animation py-3 px-6 lg:px-8 rounded-sm  transition-bg duration-300 ease-in-out  text-white hover:bg-[#1299e7] hover:drop-shadow-xl bg-primary-light'>Get Started</button>
          </div>
          <div className="flex-1 z-40 h-full">
            <div className="rounded-xl slide-right w-[35vw] ml-auto hidden  md:block  md:h-[300px] lg:h-[450px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-full"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
              >
                {
                  images.map((image, i) =>
                    <SwiperSlide key={i}
                      style={{ width: "100%" }}
                      className=" h-full relative"
                    >
                      <div className="h-full w-full absolute z-30 bg-[#0b48ff] opacity-10"></div>
                      <div className="w-full h-full">

                        <img src={image} alt="" className="h-full rounded-xl w-full object-cover" />

                      </div>
                    </SwiperSlide>
                  )
                }

              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
