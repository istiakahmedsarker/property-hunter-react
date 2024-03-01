// Import necessary modules and components from React
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

// Define the functional component for displaying a single message
const Message = ({ message }) => {
  // Access the current user information from the AuthContext using useContext
  const { currentUser } = useContext(AuthContext);
  // Access chat-related state from the ChatContext using useContext
  const { data } = useContext(ChatContext);

  // Create a ref to the message element for smooth scrolling
  const ref = useRef();

  // Use the useEffect hook to scroll into view when the message changes
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Render JSX for a single message
  return (
    <div
      ref={ref} // Attach the ref to the message div for scrolling into view
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      {/* Container for message information */}
      <div className="messageInfo">
        {/* Display the profile picture of the sender */}
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* Display a timestamp for the message (e.g., "just now") */}
        <span>just now</span>
      </div>
      {/* Container for message content */}
      <div className="messageContent">
        {/* Display the text content of the message */}
        <p>{message.text}</p>
        {/* Display an image if the message contains an image */}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

// Export the Message component
export default Message;
