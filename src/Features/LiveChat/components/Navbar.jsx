import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../../Firebase/firebase.config'
import { db } from "../../../Firebase/firebase.config";
// import { AuthContext } from '../context/AuthContext'
import useAuth from '../../../Hooks/useAuth'

const Navbar = () => {
  
  const { user } = useAuth();

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={user.photoURL} alt="" />
        <span>{user.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar