import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB1KLhLCU-WIYDjs0JO67NdYW7P-gPplM",
  authDomain: "curatedgallery-4aab9.firebaseapp.com",
  projectId: "curatedgallery-4aab9",
  storageBucket: "curatedgallery-4aab9.appspot.com",
  messagingSenderId: "157601111596",
  appId: "1:157601111596:web:e2c7a6e7f20b7ab81b3b89"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);