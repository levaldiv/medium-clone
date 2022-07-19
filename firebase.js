// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "medium-clone-d0321.firebaseapp.com",
  projectId: "medium-clone-d0321",
  storageBucket: "medium-clone-d0321.appspot.com",
  messagingSenderId: "1072367915690",
  appId: "1:1072367915690:web:54832abac2b9fcf91776d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
