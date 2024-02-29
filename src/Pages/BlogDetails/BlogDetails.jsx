import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BiCommentDots } from 'react-icons/bi';
import CommentForm from '../../Features/Blog/Components/CommentForm/CommentForm';
import { FaRegUserCircle } from 'react-icons/fa';
import BlogComments from '../../Features/Blog/Components/BlogComments/BlogComments';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import BlogDetailsLoading from '../../Features/Blog/Components/BlogDetailsLoading/BlogDetailsLoading';
import PageTitle from '../../Features/PageTitle/PageTitle';

const BlogDetails = () => {
  const { id } = useParams();
  const axios = useAxiosSecure();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['blogsDetails', id],
    queryFn: async () => {
      const res = await axios.get(`/blogs/${id}`);
      return res?.data?.data?.blog;
    },
  });

  if (isPending) return <BlogDetailsLoading />;

  const { heading, description, images, createdAt, comments, author } =
    data || {};

  const date = new Date(createdAt);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="max-w-4xl text-stone-800 dark:text-stone-300  mx-auto mt-10 px-5 xl:px-0">
      <PageTitle title="Property Hunter || Blog Details"></PageTitle>
      <h2 className="text-2xl  sm:text-3xl md:text-4xl font-bold ">
        {heading}
      </h2>
      <div className="flex items-center gap-5  mt-5 mb-5 font-semibold text-sm max-w-6xl justify-between">
        <div className="flex gap-2 items-center ">
          {author?.image ? (
            <img
              src={author?.image}
              className="w-10 h-10 object-cover rounded-full"
              alt="author img"
            />
          ) : (
            <FaRegUserCircle className="h-10 w-10" />
          )}

          <div>
            <h5>{author?.name}</h5>
            <h5>{formattedDate}</h5>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <BiCommentDots className="mt-1 text-base" />
          <h5> {comments?.length}</h5>
        </div>
      </div>

      <hr />

      <img
        className="rounded-md w-full h-[50vh] sm:h-[80vh] object-cover mt-7"
        src={images}
        alt="blog details image"
      />

      <div className="mt-10 mx-auto mb-7">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-lg mt-4"
        />
      </div>

      <hr />

      <BlogComments comments={comments} refetch={refetch} />

      <CommentForm id={id} refetch={refetch} />
    </div>
  );
};

export default BlogDetails;
