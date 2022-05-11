
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlrHjtG-BM5YocNGcrlAYq7d7zkfP7-S0",
  authDomain: "react-native-pmg.firebaseapp.com",
  projectId: "react-native-pmg",
  storageBucket: "react-native-pmg.appspot.com",
  messagingSenderId: "836968191884",
  appId: "1:836968191884:web:d2ec290aae45ee767d28a9",
  measurementId: "G-7RH014XPXG"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
