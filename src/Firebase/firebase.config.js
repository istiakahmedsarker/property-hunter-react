// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDplcHjpCXSrHujsUnnTTjX9D0d-48zKV0",
    authDomain: "property-hunter-ba9e3.firebaseapp.com",
    projectId: "property-hunter-ba9e3",
    storageBucket: "property-hunter-ba9e3.appspot.com",
    messagingSenderId: "110922384515",
    appId: "1:110922384515:web:ff6d97f5033b8ef99f07b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app