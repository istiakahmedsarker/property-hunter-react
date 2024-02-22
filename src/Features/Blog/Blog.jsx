import { useState } from 'react';
import BlogCard from './Components/BlogCard/BlogCard';
import useDebounce from '../../Hooks/useDebounce';
import { FiSearch } from 'react-icons/fi';
import LatestBlog from './Components/LatestBlogs/LatestBlog';
import useGetData from '../../Hooks/useGetData';
import BlogLoadingSkeleton from './Components/BlogLoadingSkeleton';
import Pagination from '../../Components/Pagination/Pagination';

const Blog = () => {
  // const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const debouncedSearchValue = useDebounce(searchText, 800);
  const [activePage, setActivePage] = useState(1);
  const limit = 4;

  const { data: latestBlogsData } = useGetData({
    key: ['latestBlogs'],
    api: `/blogs?sort=-createdAt&limit=3&select=heading,images`,
  });

  const { data, isPending, error } = useGetData({
    key: ['blogs', debouncedSearchValue, activePage],
    api: `/blogs?title=${searchText}&page=${activePage}&limit=${limit}`,
  });

  //calculate total page
  const totalPage = Math.ceil(parseInt(data?.data?.totalBlogs) / limit);

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto my-10 md:my-16">
      <h3 className="text-4xl dark:text-cyan-50 font-bold mb-5 md:mb-12 font-josep max-w-md mx-auto md:mx-0">
        Blogs
      </h3>
      <div className="grid  grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 xl:px-0  items-start">
        <div className="md:col-span-7 900:col-span-8 sm:w-full mx-auto md:w-full order-2 md:order-1">
          <div className="grid mb-10 lg:mb-5 900:grid-cols-2 gap-6  gap-y-10 md:grid-cols-1">
            {isPending ? (
              <BlogLoadingSkeleton data={data} />
            ) : (
              <>
                {!data?.data?.blogs?.length ? (
                  <div className="h-[70vh] flex-col flex items-center justify-center">
                    No more items available
                  </div>
                ) : (
                  <>
                    {data?.data?.blogs?.map((blog) => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                  </>
                )}
              </>
            )}
          </div>
          <Pagination
            totalPage={totalPage}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>

        <div className="md:col-span-5 900:col-span-4 flex flex-col w-full max-w-md mx-auto md:sticky md:top-10   md:order-2">
          <div className="bg-white dark:bg-card-dark shadow-sm rounded-md md:p-6 w-full relative md:mb-0 mb-12">
            <input
              className="border-2 dark:border-stone-500 dark:bg-card-dark dark:text-cyan-50 w-full pl-12 pr-5 py-3 text-lg text-stone-700 rounded-md"
              type="text"
              value={searchText}
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4 md:left-10 md:top-10" />
          </div>

          <div className="hidden md:flex flex-col gap-8 dark:text-cyan-50 dark:bg-card-dark bg-white shadow-sm px-6 py-8 rounded-md md:mt-10">
            <h5 className="font-bold text-lg -mb-2">Latest blogs</h5>
            {latestBlogsData?.data?.blogs?.map((blog) => (
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

export default Blog;
