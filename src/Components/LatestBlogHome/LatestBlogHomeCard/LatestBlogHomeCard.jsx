import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlogHomeCard = ({ blog }) => {
  const { _id, images, heading, createdAt } = blog || {};
  // for arrange the date
  const createdAtDate = new Date(createdAt);
  const formattedDate = createdAtDate
    .toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
    .toUpperCase();
  return (
    <div className=" lg:w-96 w-90 my-5 rounded-xl shadow-lg shadow-drop px-5 py-4 bg-white dark:bg-card-dark">
      <div className="relative">
        <img
          className="h-56 object-cover rounded-lg"
          src={images[0]}
          alt="blog image"
        />
        <div className="absolute -bottom-3 right-0 h-20 w-20 mx-auto  text-white bg-primary-light px-3 py-2 flex justify-center items-center rounded-sm ">
          <h3 className="text-center">{formattedDate}</h3>
        </div>
      </div>
      <h3 className=" font-semibold my-3 h-10 dark:text-in-dark ">{heading}</h3>
      <Link to={`/blogs/${_id}`} className="my-3 ">
        <button className="text-animation py-3 px-6 lg:px-8 rounded-sm  transition-bg duration-300 ease-in-out  text-white hover:bg-[#0e8ad2] hover:drop-shadow-xl bg-primary-light">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default LatestBlogHomeCard;
