// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBNHcNYKmQ_1JlXrOKPe5HNuRWu9BzgQs8",
  authDomain: "fritternot.firebaseapp.com",
  projectId: "fritternot",
  storageBucket: "fritternot.appspot.com",
  messagingSenderId: "760610387229",
  appId: "1:760610387229:web:eb9f9ca75b001740949df4",
  measurementId: "G-XN4NM57287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// sign in configuration
const auth = getAuth(app);
const gmailProvider = new GoogleAuthProvider();
const signInWithGmail = () =>signInWithPopup(auth, gmailProvider);


export {db , firebaseConfig , auth, signInWithGmail};
