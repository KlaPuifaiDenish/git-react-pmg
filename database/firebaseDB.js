// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

export default firebaseapp;