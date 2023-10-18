// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoRaxc_UAqnQCnViHi6ZRDJETDnCktHUM",
  authDomain: "netflixgpt-25702.firebaseapp.com",
  projectId: "netflixgpt-25702",
  storageBucket: "netflixgpt-25702.appspot.com",
  messagingSenderId: "771130331050",
  appId: "1:771130331050:web:7499b5b9ed09779e15e5d3",
  measurementId: "G-GBRXEGRR52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();