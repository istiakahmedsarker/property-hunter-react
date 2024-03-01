import useGetData from '../../../../Hooks/useGetData';
import LatestBlog from './LatestBlog';

const LatestBlogs = () => {
  const { data: latestBlogsData } = useGetData({
    key: ['latestBlogs'],
    api: `/blogs?sort=-createdAt&limit=3&select=heading,images`,
  });
  return (
    <div className="hidden md:flex flex-col gap-8 dark:text-cyan-50 dark:bg-card-dark bg-white shadow-sm px-6 py-8 rounded-md md:mt-10">
      <h5 className="font-bold text-lg -mb-2">Latest blogs</h5>
      {latestBlogsData?.data?.blogs?.map((blog) => (
        <LatestBlog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default LatestBlogs;
