// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Ps_m6jI2VizyDmnEi4l_8vIkupeGUXU",
  authDomain: "react-therapy.firebaseapp.com",
  projectId: "react-therapy",
  storageBucket: "react-therapy.appspot.com",
  messagingSenderId: "765611184295",
  appId: "1:765611184295:web:1bef56073222f20c0c8b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);;