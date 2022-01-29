// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export {db , firebaseConfig};
