// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3cea5.firebaseapp.com",
  projectId: "mern-estate-3cea5",
  storageBucket: "mern-estate-3cea5.appspot.com",
  messagingSenderId: "264656192193",
  appId: "1:264656192193:web:72da10c5d70a6a8e3a8a40",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
