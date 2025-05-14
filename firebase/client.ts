// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCTJmnXRZX-4RyIaDSojXq4FUOnwY7fUs",
  authDomain: "testmate-web.firebaseapp.com",
  projectId: "testmate-web",
  storageBucket: "testmate-web.firebasestorage.app",
  messagingSenderId: "191685246730",
  appId: "1:191685246730:web:6a8a694130facf99cb04f3",
  measurementId: "G-6L1YQWSLMQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);