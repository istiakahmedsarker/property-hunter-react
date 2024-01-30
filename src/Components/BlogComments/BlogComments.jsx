import Star from '../Star/Star';
import avatar from '../../assets/avatar.webp';

const BlogComments = ({ comments }) => {
  return (
    <div className="mt-5">
      <h3 className="text-xl md:text-2xl mb-2 md:mb-4 font-bold">
        Comments({comments.length})
      </h3>
      <div className="flex flex-col divide-y-2 divide-stone-200">
        {comments.map((comment, i) => {
          const date = new Date(comment.createdDate);
          const options = { year: 'numeric', month: 'short', day: 'numeric' };
          const formattedDate = date.toLocaleDateString('en-US', options);
          return (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 items-start py-4 md:py-8"
            >
              {comment?.authorImg ? (
                <img
                  className="w-16 h-16 object-cover rounded-2xl"
                  src={comment.authorImg}
                  alt="author"
                />
              ) : (
                <img
                  className="w-16 h-16 object-cover rounded-2xl"
                  src={avatar}
                  alt="author"
                />
              )}

              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="text-lg font-bold text-stone-800 mb-1">
                      {comment.name}
                    </h5>
                    <Star rating={comment.rating} />
                  </div>
                  {/* <h6 className="text-sm font-semibold text-stone-500">
                    {formattedDate}
                  </h6> */}
                </div>
                <p className="">{comment.commentMsg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogComments;
