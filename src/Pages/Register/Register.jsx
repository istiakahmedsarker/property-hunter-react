import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../Firebase/firebase.config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const myAxios = useAxios();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            const imageURL = downloadURL;

            // Post user data to your server
            myAxios.post('/users', {
              name: displayName,
              email,
              role: 'user',
              image: imageURL || '',
            })
              .then(() => {
                toast.success('Registration Successful');
                navigate("/");
              })
              .catch(err => {
                toast.error('Registration Failed!');
              });
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        {/* Application logo */}
        <span className="logo">Lama Chat</span>
        {/* Form title */}
        <span className="title">Register</span>
        {/* Form element with input fields and file upload for avatar */}
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            {/* Image and text for adding an avatar */}
            {/* <img src={Add} alt="" /> */}
            <span>Add an avatar</span>
          </label>
          {/* Submit button with conditional disabling based on loading state */}
          <button disabled={loading}>Sign up</button>
          {/* Loading indicator message */}
          {loading && "Uploading and compressing the image please wait..."}
          {/* Error message display */}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
