import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Comment = ({ avatar, username, timestamp, content }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
    } else {
      setDislikes(dislikes + 1);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    }
    setDisliked(!disliked);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <img className="comment-avatar" src={avatar} alt={`${username}'s avatar`} />
        <div className="comment-user-info">
          <span className="comment-username">{username}</span>
          <span className="comment-timestamp">{timestamp}</span>
        </div>
        <div className="comment-actions">
          <button className={`comment-action-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
            <FaThumbsUp className="icon" /> Like ({likes})
          </button>
          <button className={`comment-action-button ${disliked ? 'disliked' : ''}`} onClick={handleDislike}>
            <FaThumbsDown className="icon" /> Dislike ({dislikes})
          </button>
        </div>
      </div>
      <p className="comment-content">{content}</p>
    </div>
  );
};

const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} />
    ))}
  </div>
);

const CommentTemplate = () => {
  const sampleComments = [
    {
      avatar: 'path/to/avatar1.jpg',
      username: 'User1',
      timestamp: '2 hours ago',
      content: 'This is a great comment!',
    },
    {
      avatar: 'path/to/avatar2.jpg',
      username: 'User2',
      timestamp: '1 day ago',
      content: 'I totally agree with you!',
    },
    // Add more comments as needed
  ];

  return (
    <div className="comment-template">
      <h2 className="comment-heading">Comments</h2>
      <CommentList comments={sampleComments} />
    </div>
  );
};

export default CommentTemplate;
