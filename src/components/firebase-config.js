// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT,
  storageBucket: process.env.REACT_APP_FB_STORAGE,
  messagingSenderId: process.env.REACT_APP_FB_SENDER,
  appId: process.env.REACT_APP_FB_APP,
  measurementId: process.env.REACT_APP_FB_MEASURE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// sign in configuration
const auth = getAuth(app);
const gmailProvider = new GoogleAuthProvider();
const signInWithGmail = () =>signInWithPopup(auth, gmailProvider);


export {db , firebaseConfig , auth, signInWithGmail};
