import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfbevVuXFCmPWS0bUc7jYLFy_DghanNHI',
  authDomain: 'save-food-app.firebaseapp.com',
  projectId: 'save-food-app',
  storageBucket: 'save-food-app.appspot.com',
  messagingSenderId: '49052333865',
  appId: '1:49052333865:web:3acd44d98f3535a305e938',
  measurementId: 'G-SRBV9YTDHQ',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
