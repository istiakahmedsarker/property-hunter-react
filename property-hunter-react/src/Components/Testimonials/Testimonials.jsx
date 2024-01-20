"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Style/Style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const getSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
      return 1;
    } else if (windowWidth <= 840) {
      return 1;
    }
    return 2;
  };

  // console.log(reviews);
  return (
    <div className="bg-[#fff7f5] bg-[url('https://res.cloudinary.com/debqyv4o6/image/upload/v1705426954/Vector_11_skdxn1.png')] bg-cover bg-right-bottom">
      <div className="px-4 md:px-0 max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-6 md:py-8 lg:py-16 ">
        <div className="relative z-5 flex flex-col gap-2">
          <h3 className="text-[#eb6753] text-lg md:text-sm  text-center md:text-left font-medium">
            Testimonials
          </h3>
          <h1 className="text-gray-900 text-xl md:text-2xl lg:text-4xl text-center md:text-left font-bold md:mb-3 lg:mb-8">
            Real Estate Tales Shared by Our Clients
          </h1>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay]}
          breakpoints={{
            // When window width is <= 640px (small devices)

            640: {
              slidesPerView: 1,
            },
            // When window width is <= 768px (medium devices)
            768: {
              slidesPerView: 1,
            },
            // When window width is <= 1024px (large devices)
            1024: {
              slidesPerView: 2,
            },
            // When window width is <= 1280px (xl devices)
            1280: {
              slidesPerView: 2,
            },
          }}
          onInit={(swiper) => {
            swiper.params.slidesPerView = getSlidesPerView();
            swiper.update();
          }}
          onResize={(swiper) => {
            swiper.params.slidesPerView = getSlidesPerView();
            swiper.update();
          }}
          className="mySwiper my-4 relative overflow-visible z-[5]"
        >
          {reviews &&
            reviews?.map((review, idx) => (
              <SwiperSlide
                key={idx}
                className="swiper-slide h-full py-8 overflow-visible relative z-[10]"
              >
                <div className="bg-white drop-shadow-md p-10 rounded-xl relative overflow-visible flex flex-col items-center justify-between  gap-3 h-full z-30 ">
                  <div className=" text-lg  rounded-full p-3 py-2 text-gray-100 z-40 w-full flex items-center justify-between gap-4">
                    <img
                      className="h-10 w-10 md:h-16 md:w-16 rounded-[100%] object-cover"
                      src={review?.client?.profileImage}
                      alt=""
                      srcset=""
                    />
                    <div>
                      <h3 className="text-sm md:text-lg text-gray-700 font-medium flex-grow">
                        {review?.client?.name}
                      </h3>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 h-4"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 h-4"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 h-4"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 h-4"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 h-4"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-gray-500"></div>
                  <p className="text-gray-600 text-left text-sm md:text-md">
                    {review?.comment}
                  </p>
                  <div className="flex items-center justify-center w-full "></div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
