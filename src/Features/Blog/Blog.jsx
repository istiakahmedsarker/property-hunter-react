import { useState } from 'react';
import BlogCard from './Components/BlogCard/BlogCard';
import useDebounce from '../../Hooks/useDebounce';
import { FiSearch } from 'react-icons/fi';
import useGetData from '../../Hooks/useGetData';
import BlogLoadingSkeleton from './Components/BlogLoadingSkeleton';
import Pagination from '../../Components/Pagination/Pagination';
import LatestBlogs from './Components/LatestBlogs/LatestBlogs';
import NoItems from '../../Components/NoItems/NoItems';

const Blog = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchValue = useDebounce(searchText, 800);
  const [activePage, setActivePage] = useState(1);
  const limit = 4;

  const { data, isPending, error } = useGetData({
    key: ['blogs', debouncedSearchValue, activePage, limit],
    api: `/blogs?title=${searchText}&page=${activePage}&limit=${limit}`,
  });

  //calculate total page
  const totalPage = Math.ceil(parseInt(data?.data?.totalBlogs) / limit);

  if (error)
    return (
      <h3 className="h-[85vh] flex flex-col items-center justify-center font-semibold text-2xl text-red-500">
        {error}
      </h3>
    );

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto my-10 md:my-16">
      {data?.data?.totalBlogs > 1 ? (
        <h3 className="text-2xl sm:text-3xl md:text-4xl dark:text-cyan-50 font-bold mb-5 md:mb-12 font-josep max-w-md mx-auto md:mx-0">
          Blogs
        </h3>
      ) : (
        ''
      )}

      <div className="grid  grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 xl:px-0  items-start">
        <div className="md:col-span-7 900:col-span-8 w-full mx-auto md:w-full order-2 md:order-1">
          {data?.data?.totalBlogs === 0 ? (
            <NoItems />
          ) : (
            <>
              <div className="grid mb-10 lg:mb-5  900:grid-cols-2 gap-6  gap-y-10 md:grid-cols-1">
                {isPending ? (
                  <BlogLoadingSkeleton data={data} />
                ) : (
                  <>
                    {data?.data?.blogs?.map((blog) => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                  </>
                )}
              </div>
              <Pagination
                totalPage={totalPage}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </>
          )}
        </div>

        <div className="md:col-span-5 900:col-span-4 flex flex-col w-full max-w-md mx-auto md:sticky md:top-10   md:order-2">
          <div className="bg-white dark:bg-card-dark shadow-sm rounded-md md:p-6 w-full relative md:mb-0 mb-12">
            <input
              className="border-2 dark:border-stone-500 dark:bg-card-dark dark:text-cyan-50 w-full pl-12 pr-5 py-3 text-lg text-stone-700 rounded-md"
              type="text"
              value={searchText}
              placeholder="Search by title..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4 md:left-10 md:top-10" />
          </div>

          <LatestBlogs />
        </div>
      </div>
    </div>
  );
};

export default Blog;
