import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Comment = ({ avatar, username, timestamp, content }) => (
    <div className="comment">
        <div className="comment-header">
            <img className="comment-avatar" src={avatar} alt={`${username}'s avatar`} />
            <div className="comment-user-info">
                <span className="comment-username">{username}</span>
                <span className="comment-timestamp">{timestamp}</span>
            </div>
            <div className="comment-actions">
                <button className="comment-action-button">
                    <FaThumbsUp className="icon" /> Like
                </button>
                <button className="comment-action-button">
                    <FaThumbsDown className="icon" /> Dislike
                </button>
                <button className="comment-action-button">Edit</button>
                <button className="comment-action-button">Delete</button>
            </div>
        </div>
        <p className="comment-content">{content}</p>
    </div>
);

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
