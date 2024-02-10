import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { _id, images, heading, description, } = blog;

  return (
    <div className="bg-white cursor-pointer overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300 rounded-xl">
      <img src={images[0]} alt="Blog Post" className="w-96 h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#333]">{heading}</h3>
        <hr className="my-6" />
        <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: description.substring(0, 110) }}></p>
        <Link to={`/blogs/${_id}`}>
          <button className="bg-[#EB6753] px-5 py-2 rounded-sm text-red-50 font-semibold">
            Read full blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
