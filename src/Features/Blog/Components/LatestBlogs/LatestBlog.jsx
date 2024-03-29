import { Link } from 'react-router-dom';

const LatestBlog = ({ blog }) => {
  const { _id, heading, images } = blog;
  // console.log(blog);
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-24 h-24 rounded-md object-cover"
        src={images[0]}
        alt=""
      />
      <Link
        to={`/blogs/${_id}`}
        className="cursor-pointer hover:text-primary-light duration-200 font-bold leading-6"
      >
        {heading}
      </Link>
    </div>
  );
};

export default LatestBlog;
