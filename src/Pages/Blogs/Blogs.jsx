import React, { useEffect, useState } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import useDebounce from '../../Hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';

const Blogs = () => {
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const debouncedSearchValue = useDebounce(searchText, 500);
  const axios = useAxios();

  const { isPending, data: blogs = [] } = useQuery({
    queryKey: ['blogs', debouncedSearchValue],
    queryFn: async () => {
      try {
        console.log('fetching...');
        const res = await axios.get(`/blogs?title=${searchText}`);
        return res?.data?.data?.blogs;
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <div>
      {isPending && (
        <p className="h-[90vh] flex flex-col items-center justify-center text-center">
          Loading...
        </p>
      )}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 px-4 xl:px-0 max-w-7xl mx-auto my-10 ">
        <div className="col-span-8 sm:w-[70%] mx-auto md:w-full">
          <div className="grid  md:grid-cols-2 gap-6 lg:gap-10 xl:gap-x-28 gap-y-10  grid-cols-1 ">
            {blogs?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="col-span-4 flex flex-col  items-start">
          <div className="">Featured Blogs</div>
          <input
            className="border-2"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
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
