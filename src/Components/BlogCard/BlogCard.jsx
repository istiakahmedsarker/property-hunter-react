import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { _id, images, heading, description } = blog;

  return (
    <div className="flex flex-col gap-8  h-[540px]">
      <img
        className="min-h-[250px] object-cover rounded-md"
        src={images[0]}
        alt="blog image"
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl  font-bold lg:leading-8">{heading}</h2>
        <div className="flex flex-col gap-6">
          <p
            dangerouslySetInnerHTML={{
              __html: description.substring(0, 110),
            }}
            className="-mt-2 text-lg font- text-stone-400 "
          ></p>
          <Link to={`/blogs/${_id}`}>
            <button className="bg-[#EB6753] px-5 py-2 rounded-sm text-red-50 font-semibold ">
              Read full blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
