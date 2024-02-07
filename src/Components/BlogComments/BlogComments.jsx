import Star from '../Star/Star';
import avatar from '../../assets/avatar.webp';
import { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import axios from 'axios';

const Comment = ({ comment }) => {
  const [likes, setLikes] = useState(comment?.likesCount || 0);
  const [dislikes, setDislikes] = useState(comment?.dislikesCount || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // console.log(comment)

  const handleLikesCount = (_id) => {
    const updatedLikes = likes +1;
    // console.log(_id)
    // console.log("LIKES:" , updatedLikes )

    axios.put(`http://localhost:5000/service/${_id}`, updatedLikes, {
    })
      .then((response) => {
        console.log(response.data);
        console.log('Item updated successfully!!!');
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  }

  const handleDislikesCount = (_id) => {
    const updatedDislikes = dislikes;

    axios.put(`http://localhost:5000/service/${_id}`, updatedDislikes, {
    })
      .then((response) => {
        console.log(response.data);
        console.log('Item updated successfully!!!');
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  }

  const handleLike = (_id) => {
    if (liked) {
      setLikes(likes - 1);
      handleLikesCount(_id)
    } else {
      setLikes(likes + 1);
      handleLikesCount(_id)
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }
    setLiked(!liked);
  };

  const handleDislike = (_id) => {
    if (disliked) {
      setDislikes(dislikes - 1);
      handleDislikesCount(_id)
    } else {
      setDislikes(dislikes + 1);
      handleDislikesCount(_id)
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    }
    setDisliked(!disliked);
  };

  const date = new Date(comment.createdDate);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

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
          onClick={()=> handleLike(comment._id)}
        >
          {liked ? (
            <FaThumbsUp className="icon text-green-500 mr-1" />
          ) : (
            <FaThumbsUp className="icon mr-1 text-[#e4e5e9]" />
          )}
          <span>{likes}</span>
        </button>
        <button
          className={`comment-action-button flex items-center`}
          onClick={()=>handleDislike(comment._id)}
        >
          {disliked ? (
            <FaThumbsDown className="icon text-red-500 mr-1" />
          ) : (
            <FaThumbsDown className="icon mr-1 text-[#e4e5e9]" />
          )}
          <span>{dislikes}</span>
        </button>
      </div>
    </div>
  );
};

const BlogComments = ({ comments }) => {
  return (
    <div className="mt-5">
      <h3 className="text-xl md:text-2xl mb-2 md:mb-4 font-bold">
        Comments({comments.length})
      </h3>
      <div className="flex flex-col divide-y-2 divide-stone-200">
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
