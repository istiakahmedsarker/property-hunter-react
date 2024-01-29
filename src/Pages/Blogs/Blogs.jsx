import React, { useEffect, useState } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://property-hunter-server.vercel.app/api/v1/blogs'
        );
        const data = await res.json();

        setBlogs(data?.data.blogs);
        setLoading(false);

        // setBlogs(blogsData.data.blogs);
      } catch (error) {
        setError(error);
      }
      console.log(loading);
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading && (
        <p className="h-[90vh] flex flex-col items-center justify-center text-center">
          Loading...
        </p>
      )}
      {error && <p>Error: {error.message}</p>}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 md:px-0 max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto my-10">
        <div className="col-span-2">
          <div className="grid  md:grid-cols-2 grid-cols-1 ">
            {blogs?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="">Featured Blogs</div>
          <Link
            to="/createBlog"
            className="bg-[#EF7E53] px-4 py-1.5 rounded-sm text-white font-semibold"
          >
            Create Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
