// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your actual config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDZllWoTta79-Mk3h3744byIItp26w_ciY",
  authDomain: "innova-classroom.firebaseapp.com",
  projectId: "innova-classroom",
  storageBucket: "innova-classroom.appspot.com", // 🔁 fixed `.app` to `.appspot.com`
  messagingSenderId: "547854708669",
  appId: "1:547854708669:web:9605bfaba07a8c3a746cd4",
  measurementId: "G-BYKB0NE63X"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the services you'll use
export const auth = getAuth(app);
export const db = getFirestore(app);
