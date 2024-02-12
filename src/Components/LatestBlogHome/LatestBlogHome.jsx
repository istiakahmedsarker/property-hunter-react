import React from 'react';
import useGetData from '../../Hooks/useGetData';
import BlogCard from '../BlogCard/BlogCard';
import Marquee from 'react-fast-marquee';
import LatestBlogHomeCard from './LatestBlogHomeCard/LatestBlogHomeCard';
// Import Swiper from React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Testimonials/Style/Style.css';

const LatestBlogHome = () => {
  const { data: latestBlogsData } = useGetData({
    key: ['latestBlogs'],
    api: `/blogs?sort=-createdAt`,
  });
  // set slider preview
  const getSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
      return 1;
    } else if (windowWidth <= 840) {
      return 2;
    }
    return 3;
  };
  console.log(latestBlogsData?.data?.blogs);
  return (
    <div className="w-11/12 mx-auto my-7 ">
      <div className="my-6">
        <h2 className="text-gray-900 text-[28px] md:text-[30px] lg:text-4xl text-center  font-bold md:mb-3 lg:mb-4">
          Our latest Blogs
        </h2>
        <h3 className="text-sm font-semibold text-center">Take a Moment to Read This</h3>
      </div>
      {/* slider implementation */}
      <div className="w-full mx-auto">
        <Swiper
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
          className="mySwiper my-4 relative overflow-visible z-[5]"
        >
          {latestBlogsData?.data?.blogs &&
            latestBlogsData?.data?.blogs.map((blog, idx) => (
              <SwiperSlide
                key={idx}
                className="swiper-slide h-full pt-0 md:pt-0 lg:pt-8 pb-8 md:pb-8 overflow-visible relative z-[10]"
              >
                <LatestBlogHomeCard
                  key={blog._id}
                  blog={blog}
                ></LatestBlogHomeCard>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* <Marquee className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ">
          {latestBlogsData?.blogs?.map(blog => (
            <LatestBlogHomeCard key={blog._id} blog={blog}></LatestBlogHomeCard>
          ))}
        </Marquee> */}
      </div>
    </div>
  );
};

export default LatestBlogHome;
