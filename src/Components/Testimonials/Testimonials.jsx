import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Style/Style.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/review.json')
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
    <div className="bg-[#ebf2f6] dark:bg-primary-dark relative my-7 md:my-20">
      <img
        src="https://i.ibb.co/xJRtgZC/Qotes.png"
        alt=""
        className="absolute bottom-0 right-0"
      />
      <img
        src="https://i.ibb.co/xJRtgZC/Qotes.png"
        alt=""
        className="absolute top-0 left-0 rotate-[180deg]"
      />
      <div className="px-4 h-[90vh] md:h-full md:px-0 max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto   py-8 md:py-6 pb-2 md:pb-8 lg:py-16 ">
        <div className="relative z-5 flex flex-col gap-2">
          <SectionTitle
            title="Testimonials"
            subTitle="Real Estate Tales Shared By Our Client"
          />
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
                className="swiper-slide h-full pt-0 md:pt-0 lg:pt-8 pb-8 md:pb-8 overflow-visible relative z-[10]"
              >
                <div className="bg-white dark:bg-card-dark drop-shadow-md p-6 md:p-10 rounded-xl relative overflow-visible flex flex-col items-center justify-between  gap-3 h-full z-30 ">
                  <div className=" text-lg  rounded-full p-3 py-2 text-gray-100 z-40 w-full flex items-center justify-between gap-4">
                    <img
                      className="h-10 w-10 md:h-16 md:w-16 rounded-[100%] object-cover"
                      src={review?.client?.profileImage}
                      alt=""
                    />
                    <div>
                      <h3 className="text-[12px] font-semibold  md:text-[20px] text-gray-800 dark:text-gray-300 flex-grow">
                        {review?.client?.name}
                      </h3>
                      <div className="rating w-[60px] md:w-[100px]">
                        <input
                          style={{
                            height: '16px',
                            border: 'none',
                          }}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 border-0 h-2 md:h-[18px]"
                        />
                        <input
                          style={{
                            height: '16px',
                            border: 'none',
                          }}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 border-0 h-2 md:h-[18px]"
                        />
                        <input
                          style={{
                            height: '16px',
                            border: 'none',
                          }}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 border-0 h-2 md:h-[18px]"
                        />
                        <input
                          style={{
                            height: '16px',
                            border: 'none',
                          }}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 border-0 h-2 md:h-[18px]"
                        />
                        <input
                          style={{
                            height: '16px',
                            border: 'none',
                          }}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 border-0 h-2 md:h-[18px]"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-gray-500"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-left text-[10px] md:text-[16px] lg:text-[16px]">
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
