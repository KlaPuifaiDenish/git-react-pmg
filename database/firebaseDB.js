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
  appId: "1:836968191884:web:8ba07fb30150b98e7d28a9",
  measurementId: "G-LMVF94F5HM"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseapp;