
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpTnkNfUmcvj6UqsRD65ngSMXwUSWIBaE",
    authDomain: "pmghp-2d113.firebaseapp.com",
    projectId: "pmghp-2d113",
    storageBucket: "pmghp-2d113.appspot.com",
    messagingSenderId: "254462190370",
    appId: "1:254462190370:web:25c4f63849da77dc7e7b7b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db)