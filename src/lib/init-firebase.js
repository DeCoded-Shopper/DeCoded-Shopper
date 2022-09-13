// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9TZztMNwQ_WW9d50ryZqK0HKNFsyEJl8",
  authDomain: "decoded-shopper.firebaseapp.com",
  projectId: "decoded-shopper",
  storageBucket: "decoded-shopper.appspot.com",
  messagingSenderId: "618513717219",
  appId: "1:618513717219:web:e5014a626900232263b2d6",
  measurementId: "G-F4VL42JNRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)