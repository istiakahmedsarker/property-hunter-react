import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import axios from 'axios';


const Comment = ({ avatar, username, content }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = async () => {
    try {
      // Assuming 'commentId' is the unique identifier for the comment
      const commentId = 'abc123'; // Replace with your actual comment ID

      if (liked) {
        setLikes(likes - 1);
        await axios.patch(`/api/v1/like-dislike/decrease-like/${commentId}`);
      } else {
        setLikes(likes + 1);
        if (disliked) {
          setDislikes(dislikes - 1);
          setDisliked(false);
          await axios.patch(`/api/v1/like-dislike/decrease-dislike/${commentId}`);
        }
        await axios.patch(`/api/v1/like-dislike/increase-like/${commentId}`);
      }

      setLiked(!liked);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleDislike = async () => {
    try {
      // Assuming 'commentId' is the unique identifier for the comment
      const commentId = 'abc123'; // Replace with your actual comment ID

      if (disliked) {
        setDislikes(dislikes - 1);
        await axios.patch(`/api/v1/like-dislike/decrease-dislike/${commentId}`);
      } else {
        setDislikes(dislikes + 1);
        if (liked) {
          setLikes(likes - 1);
          setLiked(false);
          await axios.patch(`/api/v1/like-dislike/decrease-like/${commentId}`);
        }
        await axios.patch(`/api/v1/like-dislike/increase-dislike/${commentId}`);
      }

      setDisliked(!disliked);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="comment mt-2">
      <div className="comment-header">
        <div className="flex items-center gap-2">

          <img className="comment-avatar rounded-full h-10 w-10" src={avatar} alt={`${username}'s avatar`} />
          <div className="comment-user-info">
            <span className="comment-username">{username}</span>
          </div>
        </div>

        <p className="comment-content text-xl">{content}</p>
        <div className="comment-actions">
          <button
            className={`comment-action-button`}
            onClick={handleLike}
          >
            {liked ? (
              <FaThumbsUp className="icon text-green-500" />
            ) : (
              <FaThumbsUp className="icon" />
            )}{' '}
            Like ({likes})
          </button>
          <button
            className={`comment-action-button`}
            onClick={handleDislike}
          >
            {disliked ? (
              <FaThumbsDown className="icon text-red-500" />
            ) : (
              <FaThumbsDown className="icon" />
            )}{' '}
            Dislike ({dislikes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
