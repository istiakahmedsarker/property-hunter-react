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
    <div className="px-4 w-[300px] lg:w-full mx-auto py-5 rounded-lg drop-shadow-lg bg-white">
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
              <div className="h-full w-full absolute z-30 bg-[#0b48ff] opacity-10 "></div>
              <div className="w-full h-full rounded-lg ">
                <img
                  src={img}
                  alt={propertyTitle}
                  className="w-full mx-auto h-56  rounded-lg object-cover relative "
                />
                <div className="absolute inset-0 flex items-end justify-end">
                  <h3 className="text-white bottom-0 text-sm  bg-[#eb6753] px-3 py-3 rounded-l-2xl">
                    ${price}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link to={`/propertiesDetails/${card._id}`}>
        <h3 className="font-bold my-2 underline ">{card.propertyTitle}</h3>
      </Link>
      <div>
        <h3>
          {card.location.city}, {card.location.state}
        </h3>
        <div className="flex justify-between items-center mt-3  gap-5">
          <h3 className="flex items-center gap-2">
            <span>
              <IoBedOutline />
            </span>
            <span className="text-sm"> {card.bedroom} Bed</span>
          </h3>
          <h3 className="flex items-center gap-2">
            <span>
              <PiBathtub />
            </span>
            <span className="text-sm"> {card.bathroom} Bath</span>
          </h3>
          <h3 className="flex items-center gap-1">
            <span>
              <BiShapeSquare />
            </span>
            <span className="text-sm">{card.squareFootage} sqFt</span>
          </h3>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <h3>For {card.propertyStatus}</h3>
          <h3 className="flex justify-center items-center gap-4">
            <Link to={`/propertiesDetails/${card._id}`}  target="_blank">
              <HiArrowTopRightOnSquare className='hover:text-[#eb6753] transition-all duration-300 ease-in-out'/>
            </Link>
            <GiSelfLove onClick={handleFavorite} className="cursor-pointer hover:text-[#eb6753] transition-all duration-300 ease-in-out" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
