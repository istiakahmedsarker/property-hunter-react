import React from 'react';
import { BiShapeSquare } from 'react-icons/bi';
import { GiSelfLove } from 'react-icons/gi';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
// for slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa6';

const PropertiesCardList = ({ card }) => {

  const navigate = useNavigate();

  const {
    _id,
    propertyTitle,
    propertyImages,
    location,
    squareFootage,
    bedroom,
    bathroom,
    propertyStatus,
    price,
  } = card || {};
  return (
    <div className=" rounded-lg gap-6 drop-shadow-lg bg-white dark:bg-card-dark dark:text-in-dark grid h-auto lg:h-[280px] lg:grid-cols-2 grid-cols-1 my-6">
      <div className="w-full flex h-full items-center justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-full"
        >
          {propertyImages.map((img, i) => (
            <SwiperSlide
              key={i}
              style={{ width: '100%' }}
              className="h-full relative"
            >
              <div className="h-full mx-auto absolute z-30 bg-white opacity-10"></div>
              <div className=" mx-auto h-full rounded-tl-lg rounded-bl-lg">
                <img
                  src={img}
                  alt={propertyTitle}
                  className="w-full mx-auto h-full rounded-tl-lg rounded-bl-lg object-cover"
                />
                {/* <div className="absolute inset-0 flex items-end justify-end px-4">
                  <h3 className="text-white text-sm bg-[#eb6753] px-3 py-3 rounded-l-2xl">
                    ${price}
                  </h3>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-3 lg:gap-0 p-4 lg:p-6 flex-col justify-between">
        <Link>
          <h3 className="font-bold text-2xl lg:text-xl xl:text-2xl text-left">
            {card.propertyTitle}
          </h3>
        </Link>
        {/* <div className="text-left"> */}
          <h3 className='text-lg lg:text-[14px] xl:text-lg text-gray-600 dark:text-gray-300 font-semibold'>
            {card.location.city}, {card.location.state}
          </h3>
          <h3 className=" text-xl font-bold text-primary-light rounded-l-2xl">
                    ${price}
                  </h3>
          <div className="flex items-start gap-4">
            <h3 className="flex px-3 py-3 text-sm lg:text-[10px] xl:text-sm font-semibold items-center border-2 rounded-xl justify-center gap-3">
              <span>
                <IoBedOutline />
              </span>
              <span>{card.bedroom} Bed</span>
            </h3>
            <h3 className="flex items-center px-4 py-3 text-sm lg:text-[10px] xl:text-sm font-semibold border-2 rounded-xl justify-center gap-3 pl-2">
              <span>
                <PiBathtub />
              </span>
              <span>{card.bathroom} Bath</span>
            </h3>
            <h3 className="flex items-center px-4 py-3 text-sm lg:text-[10px] xl:text-sm font-semibold border-2 rounded-xl justify-center gap-3 pl-2">
              <span>
                <BiShapeSquare />
              </span>
              <span>{card.squareFootage} sq Ft</span>
            </h3>
          </div>
          <hr className="" />
          <div className="flex items-center justify-between">
          
            <h3 className='text-lg lg:text-sm xl:text-lg font-medium text-gray-600 dark:text-gray-300'>For {card.propertyStatus}</h3>
            <button onClick={() => {
              navigate(`/propertiesDetails/${card._id}`);
            }} id='overlay-btn' className='flex items-center gap-4 transition-colors duration-500 font-semibold hover:text-white hover:bg-primary-light z-40 opacity-100 border-gray-500 dark:border-gray-300 border-2 hover:border-primary-light pl-4 text-gray-800 rounded-[100px] p-[1px]'>Details<div className='w-10 h-10 rounded-full flex items-center justify-center bg-primary-light text-white dark:text-white dark:bg-primary-light'><FaArrowRight id='arrow' className=''/></div></  button>
            <h3 className="flex justify-center items-center gap-4">
              {/* <HiArrowTopRightOnSquare /> */}
              <GiSelfLove className="cursor-pointer hover:text-primary-light transition-all dark:text-gray-400 dark:hover:text-primary-light text-gray-600 h-6 w-6 duration-300 ease-in-out" />
            </h3>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default PropertiesCardList;
