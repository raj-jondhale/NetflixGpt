// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "netflixgpt-54e66.firebaseapp.com",
    projectId: "netflixgpt-54e66",
    storageBucket: "netflixgpt-54e66.firebasestorage.app",
    messagingSenderId: "903341570102",
    appId: "1:903341570102:web:ff972e36ccf8cce2014097",
    measurementId: "G-G2DM9PEHZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();