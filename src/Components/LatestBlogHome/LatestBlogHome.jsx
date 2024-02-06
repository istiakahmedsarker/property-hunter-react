import React from 'react';
import useGetData from '../../Hooks/useGetData';
import BlogCard from '../BlogCard/BlogCard';
import Marquee from 'react-fast-marquee';
import LatestBlogHomeCard from './LatestBlogHomeCard/LatestBlogHomeCard';

const LatestBlogHome = () => {
  const { data: latestBlogsData } = useGetData({
    key: ['latestBlogs'],
    api: `/blogs?sort=-createdAt`,
  });

  console.log(latestBlogsData.blogs);
  return (
    <div className="w-11/12 mx-auto my-7 ">
      <div className="my-6">
        <h2 className="text-gray-900 text-[28px] md:text-[30px] lg:text-4xl text-center md:text-left font-bold md:mb-3 lg:mb-4">
          Our latest Blogs
        </h2>
        <h3 className="text-sm font-semibold">Take a Moment to Read This</h3>
      </div>

      <div className="w-full mx-auto">
        <Marquee className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ">
          {latestBlogsData?.blogs?.map(blog => (
            <LatestBlogHomeCard key={blog._id} blog={blog}></LatestBlogHomeCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestBlogHome;
