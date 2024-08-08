
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA9Ps_m6jI2VizyDmnEi4l_8vIkupeGUXU",
  authDomain: "react-therapy.firebaseapp.com",
  projectId: "react-therapy",
  storageBucket: "react-therapy.appspot.com",
  messagingSenderId: "765611184295",
  appId: "1:765611184295:web:1bef56073222f20c0c8b82"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);;