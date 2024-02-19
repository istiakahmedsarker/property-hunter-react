import React, { useState } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { BiShapeSquare } from 'react-icons/bi';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { GiSelfLove } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
// for slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
// for Add to Favorite
// import useAuth from '../../Hooks/useAuth';
import useAuth from '../../../../Hooks/useAuth';
// import useAxios from '../../Hooks/useAxios';
import useAxios from '../../../../Hooks/useAxios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
// import useFavorite from '../../Hooks/useFavorite';
import useFavorite from '../../../../Hooks/useFavorite';
import "./PropertiesCard.css";
import { FaArrowRight } from 'react-icons/fa6';

const PropertiesCard = ({ card }) => {
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
  // Favorite property
  const { user } = useAuth();
  const instance = useAxios();
  const navigate = useNavigate();
  const [, refetch] = useFavorite();
  const propertyImageUrl = `${propertyImages[0]}`;
  const handleFavorite = () => {
    if (user && user?.email) {
      const favoriteItem = {
        property_id: _id,
        property_title: propertyTitle,
        user_email: user?.email,
        property_images: propertyImageUrl || '',
        price: price,
        property_location: location.city || '',
      };
      instance
        .post('/property-favorite/add-favorite', favoriteItem)
        .then(res => {
          if (res?.data?.status === 'success') {
            toast.success(`${propertyTitle} added to your favorite`);
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: 'You are not Logged In',
        text: 'Please login to add to favorite!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, login!',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="w-full lg:w-full mx-auto rounded-lg drop-shadow-lg bg-white dark:bg-card-dark dark:text-in-dark">
      <div className=" w-full">
        {/* for slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-full"
          loop={true}
        >
          {propertyImages?.map((img, i) => (
            <SwiperSlide
              key={i}
              style={{ width: '100%' }}
              className=" h-full relative"
            >
             <div className="overlay absolute top-0 left-0 right-0 bottom-0 z-20 bg-transparent h-full w-full">
              <div id='card-overlay' className="h-[0%] overflow-hidden w-full absolute z-30 bg-[#0000008a] rounded-tr-lg rounded-tl-lg transition-all duration-400 ">

              <button onClick={() => {
                 navigate(`/propertiesDetails/${card._id}`)
              }} id='overlay-btn' className='flex items-center gap-4 absolute z-40 opacity-100 top-1/2 left-1/3 border-2 border-primary-light text-white rounded-[100px] p-1 text-lg font-semibold pl-8'>
                
                Details <div className='w-10 h-10 rounded-full flex items-center justify-center bg-primary-light text-white'><FaArrowRight id='arrow' className='text-white '/></div></  button>
              </div>
             </div>
              <div className="w-full h-full ">
                <img
                  src={img}
                  alt={propertyTitle}
                  className="w-full mx-auto h-[255px] object-cover relative rounded-tl-lg rounded-tr-lg"
                />
                <div className="absolute inset-0 flex items-end justify-end">
                  <h3 className="text-white bottom-0 text-sm  bg-primary-light px-3 py-3 z-40 rounded-l-2xl">
                    ${price}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
            <div className='py-4 px-4'>

     
        <h3 className="font-bold my-2 text-[22px]">{card.propertyTitle}</h3>
     
      <div className='space-y-2'>
        <h3 className='text-[16px] font-normal dark:text-gray-400'>
          {card.location.city}, {card.location.state}
        </h3>
        <div className="flex justify-between items-center mt-3  gap-5">
          <h3 className="flex items-center px-4 py-2 dark:bg-gray-900 dark:text-gray-300 bg-gray-50 rounded-lg gap-2">
            <span>
              <IoBedOutline />
            </span>
            <span className="text-sm lg:text-sm xl:text-sm font-medium"> {card.bedroom} Bed</span>
          </h3>
          <h3 className="flex items-center px-4 py-2 dark:bg-gray-900 dark:text-gray-300 bg-gray-50 rounded-lg gap-2">
            <span>
              <PiBathtub />
            </span>
            <span className="text-sm lg:text-sm xl:text-sm  font-medium"> {card.bathroom} Bath</span>
          </h3>
          <h3 className="flex items-center px-4 py-2 dark:bg-gray-900 dark:text-gray-300 bg-gray-50 rounded-lg gap-1">
            <span>
              <BiShapeSquare />
            </span>
            <span className="text-sm lg:text-sm xl:text-sm  font-medium">{card.squareFootage} sqFt</span>
          </h3>
        </div>
       
        <div className="my-3"> <hr className="" /></div>
        <div className="flex items-center justify-between">
          <h3 className='font-medium text-[16px] text-gray-600 dark:text-gray-400'>For {card.propertyStatus}</h3>
          <h3 className="flex justify-center items-center gap-4">
           
            <Link to={`/propertiesDetails/${card._id}`}  target="_blank">
              <button id='overlay-btn' className='flex items-center gap-4  z-40 opacity-100 border-gray-500 dark:border-gray-300 border-2 hover:border-primary-light text-white rounded-[100px] p-[1px]'><div className='w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary-light text-gray-700 hover:text-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-primary-light'><FaArrowRight id='arrow' className=''/></div></  button>
              </Link>
            <GiSelfLove onClick={handleFavorite} className="cursor-pointer hover:text-primary-light transition-all dark:text-gray-400 dark:hover:text-primary-light text-gray-600 h-6 w-6 duration-300 ease-in-out" />
          </h3>

        </div>
      </div>
            </div>
    </div>
  );
};

export default PropertiesCard;
