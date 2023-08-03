// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMDIcXRy_95DrzD9kSo_GxJl96de4aGO4",
  authDomain: "chatpwc-711a0.firebaseapp.com",
  databaseURL: "https://chatpwc-711a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatpwc-711a0",
  storageBucket: "chatpwc-711a0.appspot.com",
  messagingSenderId: "267904903784",
  appId: "1:267904903784:web:dca2dcfcfd8772af9869dd",
  measurementId: "G-VY9BVCGM3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)