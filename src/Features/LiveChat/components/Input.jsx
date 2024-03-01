// Import necessary modules and components from React and Firebase
import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// Define the functional component for the input section (for typing and sending messages)
const Input = () => {
  // State variables to manage the text input and selected image
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  // Access the current user information from the AuthContext using useContext
  const { currentUser } = useContext(AuthContext);
  // Access the chat-related state from the ChatContext using useContext
  const { data } = useContext(ChatContext);

  // Function to handle sending messages
  const handleSend = async () => {
    // If an image is selected, handle image upload and update the messages in Firestore
    if (img) {
      // Create a reference to the storage location using a unique identifier
      const storageRef = ref(storage, uuid());

      // Initiate the upload task for the selected image
      const uploadTask = uploadBytesResumable(storageRef, img);

      // Set up event listeners for the upload task
      uploadTask.on(
        (error) => {
          // TODO: Handle upload error
        },
        () => {
          // Once the upload is successful, get the download URL of the image
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update the messages in the Firestore document for the current chat
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      // If no image is selected, update the messages in the Firestore document for the current chat
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    // Update the last message and date in the userChats documents for both users
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    // Clear the text input and selected image
    setText("");
    setImg(null);
  };

  // Render JSX for the Input component
  return (
    <div className="input">
      {/* Text input for typing messages */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {/* Container for attaching files and sending messages */}
      <div className="send">
        {/* Attach icon */}
        <img src={Attach} alt="" />
        {/* Hidden file input for selecting images */}
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
