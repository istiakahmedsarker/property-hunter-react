// Import necessary modules and components from Firebase and React
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

// Define the functional component for displaying chat messages
const Messages = () => {
  // State variable to store the chat messages
  const [messages, setMessages] = useState([]);
  
  // Access chat-related state from the ChatContext using useContext
  const { data } = useContext(ChatContext);

  // Use the useEffect hook to subscribe to changes in the messages collection in Firestore
  useEffect(() => {
    // Set up a snapshot listener on the messages document in the "chats" collection in Firestore
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      // Check if the document exists before updating the state
      doc.exists() && setMessages(doc.data().messages);
    });

    // Clean up the snapshot listener when the component is unmounted or when the chatId changes
    return () => {
      unSub();
    };
  }, [data.chatId]); // The useEffect hook is triggered when the chatId changes

  // Log the messages to the console (for debugging purposes)
  console.log(messages);

  // Render JSX for the Messages component
  return (
    <div className="messages">
      {/* Map over the chat messages and render each message using the Message component */}
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

// Export the Messages component
export default Messages;
