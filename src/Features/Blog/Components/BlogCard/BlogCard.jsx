import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const BlogCard = ({ blog }) => {
  const { _id, images, heading, description, createdAt } = blog;

  const date = new Date(createdAt);
  const options = { year: 'numeric', day: 'numeric', month: 'short' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="max-w-md mx-auto">
      <div className="h-full  border-2 dark:bg-card-dark text-primary-dark dark:text-cyan-50 dark:border-black border-gray-200 shadow-md border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-64  lg:h-64 w-full object-cover object-center"
          src={images[0]}
          alt="blog"
        />

        <div className="p-5">
          <span className="text-sm block font-semibold text-stone-400 mb-2">
            {formattedDate}
          </span>
          <h3 className="text-lg text-primary-dark dark:text-cyan-50 font-bold mb-4">
            {heading}
          </h3>
          <p
            className="leading-relaxed mb-3"
            dangerouslySetInnerHTML={{ __html: description.substring(0, 110) }}
          ></p>

          <div className="flex items-center mt-6 justify-between flex-wrap">
            <Link
              to={`/blogs/${_id}`}
              className="bg-transparent border-2 border-primary-light flex items-center gap-3   font-semibold py-1 pl-4 pr-2 rounded-full "
            >
              <span className=" text-primary-light font-bold text-xs">
                {' '}
                READ MORE
              </span>{' '}
              <span className="bg-primary-light p-1 rounded-full">
                <IoIosArrowForward className="text-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
