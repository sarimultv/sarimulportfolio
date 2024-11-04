// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sarimulportfolio.firebaseapp.com",
  projectId: "sarimulportfolio",
  storageBucket: "sarimulportfolio.firebasestorage.app",
  messagingSenderId: "439502227314",
  appId: "1:439502227314:web:12f0a9d2687702ebd0bfeb",
  measurementId: "G-1NEGH5WCMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
