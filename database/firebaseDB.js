

import  * as  firebase from "firebase";
import  firestore from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDlrHjtG-BM5YocNGcrlAYq7d7zkfP7-S0",
  authDomain: "react-native-pmg.firebaseapp.com",
  projectId: "react-native-pmg",
  storageBucket: "react-native-pmg.appspot.com",
  messagingSenderId: "836968191884",
  appId: "1:836968191884:web:d2ec290aae45ee767d28a9",
  measurementId: "G-7RH014XPXG"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
