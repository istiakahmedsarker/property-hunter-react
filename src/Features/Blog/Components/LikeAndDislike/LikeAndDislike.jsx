import useAxios from '../../../../Hooks/useAxios';
import useAuth from '../../../../Hooks/useAuth';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

export default function LikeAndDislike({ comment, refetch }) {
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

  const filterIsLiked = comment?.likesCount?.includes(user?.email);
  const filterIsDisliked = comment?.dislikesCount?.includes(user?.email);
  return (
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
  );
}
