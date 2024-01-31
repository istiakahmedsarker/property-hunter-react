import React, { useEffect, useState } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import useDebounce from '../../Hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import LatestBlog from '../../Components/LatestBlogs/LatestBlog';

const Blogs = () => {
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const debouncedSearchValue = useDebounce(searchText, 800);
  const [activePage, setActivePage] = useState(1);
  const axios = useAxios();
  const limit = 4;

  const { data: latestBlogsData = [] } = useQuery({
    queryKey: ['latestBlogs'],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `/blogs?sort=-createdAt&limit=3&select=heading,images`
        );
        return res?.data?.data;
      } catch (error) {
        setError(error.message);
      }
    },
  });

  const { isPending, data = [] } = useQuery({
    queryKey: ['blogs', debouncedSearchValue, activePage],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `/blogs?title=${searchText}&page=${activePage}&limit=${limit}`
        );
        return res?.data?.data;
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    },
  });

  const totalPage = Math.ceil(parseInt(data?.totalBlogs) / limit);

  let pages = [];
  const totalPageCalc = () => {
    for (let x = 1; x <= totalPage; x++) {
      pages.push(x);
    }
  };
  totalPageCalc();

  const previousPage = () => {
    if (activePage === 1) return activePage;
    setActivePage(activePage - 1);
  };

  const nextPage = () => {
    if (activePage === totalPage) return activePage;
    setActivePage(activePage + 1);
  };

  return (
    <div>
      {isPending && (
        <p className="h-[90vh] flex flex-col items-center justify-center text-center">
          Loading...
        </p>
      )}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 px-4 xl:px-0 max-w-7xl mx-auto my-10 items-start">
        {!data?.blogs?.length ? (
          <div className="md:col-span-8 sm:w-[70%] mx-auto md:w-full">
            <p className=" h-[70vh] flex-col flex items-center justify-center">
              No more items available
            </p>
          </div>
        ) : (
          <div className="md:col-span-8  sm:w-[70%] mx-auto md:w-full">
            <div className="grid mb-10 lg:mb-5  md:grid-cols-2 gap-6 lg:gap-10 xl:gap-x-28 gap-y-10  grid-cols-1 ">
              {data?.blogs?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-5">
              <button
                className={`${
                  activePage === 1
                    ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                    : 'bg-white p-3 shadow-md rounded-full'
                }`}
                onClick={previousPage}
              >
                <FaArrowLeft />
              </button>

              {pages.map((pageNo) => (
                <button
                  className={`${
                    activePage === pageNo
                      ? 'bg-[#EB6753] font-semibold text-white px-4 py-2 rounded-full'
                      : 'px-4 py-2 rounded-full font-semibold bg-white shadow-md'
                  } `}
                  key={pageNo}
                  onClick={() => setActivePage(pageNo)}
                >
                  {pageNo}
                </button>
              ))}

              <button
                className={`${
                  activePage === totalPage
                    ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                    : 'bg-white p-3 shadow-md rounded-full'
                }`}
                onClick={nextPage}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        <div className="md:col-span-4 flex flex-col gap-10 w-full md:w-full sm:w-[70%] mx-auto sticky top-0 items-start">
          <div className="bg-white shadow-sm rounded-md p-6 w-full relative">
            <input
              className="border-2 w-full pl-12 pr-5 py-3 text-lg text-stone-700  rounded-md"
              type="text"
              value={searchText}
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FiSearch className="absolute text-2xl text-stone-400 left-10 top-10" />
          </div>

          <div className="flex flex-col gap-8 bg-white shadow-sm px-6 py-8 rounded-md">
            <h5 className="font-bold text-lg -mb-2">Latest blogs</h5>
            {latestBlogsData?.blogs?.map((blog) => (
              <LatestBlog key={blog._id} blog={blog} />
            ))}
          </div>

          {/* <Link
            to="/createBlog"
            className="bg-[#EB6753] px-4 py-1.5 rounded-sm text-white font-semibold"
          >
            Create Blog
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
