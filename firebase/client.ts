// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYBut7eghVAP8eyhqEMY92DDQBWf1BrHM",
  authDomain: "testmate-e85fe.firebaseapp.com",
  projectId: "testmate-e85fe",
  storageBucket: "testmate-e85fe.firebasestorage.app",
  messagingSenderId: "929908905050",
  appId: "1:929908905050:web:058e005734fabee5097463",
  measurementId: "G-BWLZSE0HJV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
