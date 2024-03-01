import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDplcHjpCXSrHujsUnnTTjX9D0d-48zKV0",
  authDomain: "property-hunter-ba9e3.firebaseapp.com",
  projectId: "property-hunter-ba9e3",
  storageBucket: "property-hunter-ba9e3.appspot.com",
  messagingSenderId: "110922384515",
  appId: "1:110922384515:web:ff6d97f5033b8ef99f07b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export default app;
