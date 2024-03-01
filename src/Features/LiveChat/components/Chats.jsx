// Import necessary modules and components from Firebase and React
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../Providers/ChatContextProvider";
import { db } from "../../../Firebase/firebase.config";
import useAuth from "../../../Hooks/useAuth";

// Define the functional component for displaying user chats
const Chats = () => {
  // State variable to store the user chats
  const [chats, setChats] = useState([]);

  // Access the current user information from the AuthContext using useContext
  // const { currentUser } = useContext(AuthContext);
  const { user } = useAuth();
  // Access the dispatch function from the ChatContext using useContext
  const { dispatch } = useContext(ChatContext);

  // Use the useEffect hook to fetch and update user chats when the component mounts or when the current user changes
  useEffect(() => {
    // Define a function to get user chats and subscribe to changes
    const getChats = () => {
      // Set up a snapshot listener on the userChats document in Firestore
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        // Update the chats state with the data from the document
        setChats(doc.data());
      });

      // Clean up the snapshot listener when the component is unmounted or when the current user changes
      return () => {
        unsub();
      };
    };

    // Check if there is a current user before calling the getChats function
    user.uid && getChats();
  }, [user.uid]); // The useEffect hook is triggered when the currentUser.uid changes

  // Define a function to handle selecting a chat user
  const handleSelect = (user) => {
    // Dispatch an action to change the selected user in the chat context
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  // Render JSX for the Chats component
  return (
    <div className="chats">
      {/* Map over the user chats and display each user chat */}
      {Object?.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          {/* Display the user's profile picture */}
          <img src={chat[1].userInfo.photoURL} alt="" />
          {/* Display user chat information */}
          <div className="userChatInfo">
            {/* Display the user's display name */}
            <span>{chat[1].userInfo.displayName}</span>
            {/* Display the last message in the chat */}
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the Chats component
export default Chats;
