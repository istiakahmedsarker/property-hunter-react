// Import necessary modules and components from React
import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../../Providers/ChatContextProvider";

// Define the functional component for the Chat view
const Chat = () => {
  // Access the chat-related state from the ChatContext using useContext
  const { data } = useContext(ChatContext);

  // Render JSX for the Chat component
  return (
    <div className="chat">
      <div className="chatInfo">
        {/* Display the display name of the chat user */}
        <span>{data.user?.displayName}</span>
        {/* Container for chat-related icons */}
        <div className="chatIcons">
          {/* Camera icon */}
          <img src={Cam} alt="" />
          {/* Add icon */}
          <img src={Add} alt="" />
          {/* More icon */}
          <img src={More} alt="" />
        </div>
      </div>
      {/* Render the Messages component to display chat messages */}
      <Messages />
      {/* Render the Input component for sending messages */}
      <Input />
    </div>
  );
};

// Export the Chat component
export default Chat;
