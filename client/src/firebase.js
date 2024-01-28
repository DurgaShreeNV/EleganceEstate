// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eleganceestates-ea34f.firebaseapp.com",
  projectId: "eleganceestates-ea34f",
  storageBucket: "eleganceestates-ea34f.appspot.com",
  messagingSenderId: "239541734298",
  appId: "1:239541734298:web:2381b999a8830bf1e64823"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);