// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2fsT5b0gxKwIDKJfQHkYLlGzupwh3BI8",
  authDomain: "tech-house-c0b96.firebaseapp.com",
  projectId: "tech-house-c0b96",
  storageBucket: "tech-house-c0b96.appspot.com",
  messagingSenderId: "694270945475",
  appId: "1:694270945475:web:e5e691bcdd48277aee1a76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
