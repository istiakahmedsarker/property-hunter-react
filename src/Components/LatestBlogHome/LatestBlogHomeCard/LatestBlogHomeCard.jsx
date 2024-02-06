import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlogHomeCard = ({ blog }) => {
  console.log(blog);
  const { _id, images, heading, description, createdAt } = blog || {};
  return (
    <div className="mr-7 w-96  my-5 rounded-xl shadow-lg shadow-drop px-5 py-4 bg-white">
      <div className="relative">
        <img
          className="h-56 object-cover rounded-lg"
          src={images[0]}
          alt="blog image"
        />
        <h3 className="absolute top-0 right-0 bg-[#EB6753] px-4 py-2 ">
          {createdAt}
        </h3>
      </div>
      <h3 className=" font-semibold my-3 h-10">{heading}</h3>
      <Link to={`/blogs/${_id}`} className="my-3 ">
        <button className="bg-[#EB6753] px-5 py-2 rounded-sm text-red-50 font-semibold ">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default LatestBlogHomeCard;
