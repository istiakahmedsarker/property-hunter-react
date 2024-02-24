import Comment from '../Comment/Comment';

const BlogComments = ({ comments, refetch }) => {
  console.log(comments);
  return (
    <div className="mt-5">
      <h3 className="text-xl md:text-2xl mb-2 md:mb-4 font-bold">
        Comments({comments.length})
      </h3>
      <div className="flex flex-col divide-y-2 divide-stone-200">
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
