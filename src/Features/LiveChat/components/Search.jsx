// Import necessary modules and components from React and Firebase
import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
// import { db } from "../firebase";
import { db } from "../../../Firebase/firebase.config";
import useAuth from "../../../Hooks/useAuth";

// Define the functional component for user search
const Search = () => {
  // State variables to manage user input, search results, and error state
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  // Access the current user information from the AuthContext using useContext
  // const { currentUser } = useContext(AuthContext);
  
  const  auth  = useAuth();
  const currentUser = {auth}
  // Function to handle user search
  const handleSearch = async () => {
    // Create a Firestore query to find users with the specified display name
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      // Execute the query and get the snapshot of the results
      const querySnapshot = await getDocs(q);

      // Iterate through the results and set the user state
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      // Set error state if there's an issue with the search
      setErr(true);
    }
  };

  // Function to handle Enter key press for search
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  // Function to handle user selection and chat creation
  const handleSelect = async () => {
    // Check whether the group (chats in Firestore) exists; if not, create it
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      // Check if the chat exists in the "chats" collection
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create a chat in the "chats" collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // Update user chats for the current user
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        // Update user chats for the selected user
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    // Reset user state and input field after selecting a user
    setUser(null);
    setUsername("");
  };

  // Render JSX for the Search component
  return (
    <div className="search">
      <div className="searchForm">
        {/* Input field for user search */}
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {/* Display error message if user not found */}
      {err && <span>User not found!</span>}
      {/* Display the selected user for chat creation */}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          {/* Display the profile picture of the selected user */}
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            {/* Display the display name of the selected user */}
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the Search component
export default Search;
