"use client"
import React, { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BlogComments = () => {
  const commentInputRef = useRef(null);
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the comment data to the backend using Axios
    const commentPromise = axios.post('http://localhost:5000/comments', { comment });

    toast.promise(
      commentPromise,
      {
        loading: 'Submitting comment...',
        success: (response) => {
          if (response.status === 200) {
            return <b>Comment submitted successfully!</b>;
          } else {
            return <b>Unexpected response from server.</b>;
          }
        },
        error: (error) => <b>Error submitting comment: {error.message}</b>,
      }
    );

    commentPromise
      .then(response => {
        // Additional actions after comment submission if needed
        // console.log('Comment submitted successfully:', response);
      })
      .catch(error => {
        // console.error('Error submitting comment:', error);
      });
  };

  return (
    <div className="mt-10">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <h3 className="text-2xl mb-4 font-bold">Comments:</h3>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            ref={commentInputRef}
            className="border border-gray-400 pr-10"
            rows={12}
            cols={60}
            placeholder="Type your comments here...."
            value={comment}
            onChange={handleChange}
          ></textarea>
          <span
            className="absolute right-3 top-3 cursor-pointer"
            role="img"
            aria-label="Emoji"
            onClick={() => {
              // Add your logic to open an emoji picker or do something with emojis
              console.log("Emoji icon clicked");
            }}
          >
            😀
          </span>
        </div>
        <button
          className="px-4 py-2 mt-4 bg-green-500 text-white rounded-lg"
          type="submit"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default BlogComments;
