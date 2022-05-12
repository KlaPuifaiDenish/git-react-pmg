import { initializeApp } from "firebase/app";
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


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export  const db = getFirestore(app);
