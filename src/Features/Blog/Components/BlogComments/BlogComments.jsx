import Star from '../Star/Star';
import avatar from '../../../../assets/avatar.webp';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import useAxios from '../../../../Hooks/useAxios';
import useAuth from '../../../../Hooks/useAuth';

const Comment = ({ comment, refetch }) => {
  const axios = useAxios();
  const { user } = useAuth();

  const handleLikeAndDislike = async (reactionType) => {
    let data = {};

    if (reactionType === 'like') {
      data = { likeEmail: user?.email };
    } else if (reactionType === 'dislike') {
      data = { disLikeEmail: user?.email };
    }

    const res = await axios.patch(`/comments/${comment?._id}`, data);

    if (res?.data?.status === 'success') {
      refetch();
    }
  };

  const filterIsLiked = comment?.likesCount.includes(user?.email);
  const filterIsDisliked = comment?.dislikesCount.includes(user?.email);

  // const date = new Date(comment.createdDate);
  // const options = { year: 'numeric', month: 'short', day: 'numeric' };
  // const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start py-4 md:py-8">
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
      <div className="comment-actions flex items-center space-x-2">
        <button
          className={`comment-action-button flex items-center`}
          onClick={() => handleLikeAndDislike('like')}
        >
          {filterIsLiked ? (
            <FaThumbsUp className="icon text-green-500 mr-1" />
          ) : (
            <FaThumbsUp className="icon mr-1 text-[#e4e5e9]" />
          )}
          <span>{comment?.likesCount?.length || 0}</span>
        </button>
        <button
          className={`comment-action-button flex items-center`}
          onClick={() => handleLikeAndDislike('dislike')}
        >
          {filterIsDisliked ? (
            <FaThumbsDown className="icon text-red-500 mr-1" />
          ) : (
            <FaThumbsDown className="icon mr-1 text-[#e4e5e9]" />
          )}
          <span>{}</span>
        </button>
      </div>
    </div>
  );
};

const BlogComments = ({ comments, refetch }) => {
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
