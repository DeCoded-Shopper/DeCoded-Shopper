// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase, set, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC9TZztMNwQ_WW9d50ryZqK0HKNFsyEJl8",
  authDomain: "decoded-shopper.firebaseapp.com",
  databaseURL: "https://decoded-shopper-default-rtdb.firebaseio.com",
  projectId: "decoded-shopper",
  storageBucket: "decoded-shopper.appspot.com",
  messagingSenderId: "618513717219",
  appId: "1:618513717219:web:e5014a626900232263b2d6",
  measurementId: "G-F4VL42JNRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get the realtime database
export const database = getDatabase(app);
//Authorization from Firebase for app
export const auth = getAuth(app);

//saves data to real time database
function createData(userID, email, name, number, location) {
  set(ref(database, "users/" + userID), {
    userID: userID,
    email: email,
    fullname: name,
    phoneNumber: number,
    location: location,
  });
}

//these are the conditions for creating an account
export function createUsers(email, password, name, phone, location) {
  let status;
  //this is to succesfully create an account
  try {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        createData(user.uid, email, name, phone, location);
        console.log("account created successfully!");
        alert("success");
      }
    );
    status = "done";
    console.log(status);
  } catch (error) {
    // This is the case when the account already exists in the system
    const errorMessage = error.message;
    if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
      console.log(errorMessage);
      alert("Email already exists");
    }
    //Display error message
    else {
      console.log(errorMessage);
    }

    status = "failed";
    console.log(status);
  }

  return status;
}

//These are conditions for an already existing account
export const loginUser = (email, password) => {
  let errorMessage;
  //Try to see if the input data matches data on database
  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("user has logged in");
    errorMessage = "success";
  } catch (error) {
    //Error message should occur when input data doesn't match data on database
    errorMessage = "error";
    console.log(error.message);
    alert("An error has occured");
  }

  return errorMessage;
};

//This is to get data about the user and show it on profile
function getCurrentUser() {
  const user = auth.currentUser;
  return user.uid;
}

//This is used to get an email that will give a user a chance to reset their password
export function resetPass(email) {
  let errorMessage;
  try {
    const res = sendPasswordResetEmail(auth, email);
    console.log("success");
    errorMessage = "success";
  } catch (error) {
    errorMessage = error.message;
    if (errorMessage === "Firebase: Error (auth/user-not-found)") {
      alert("You are not registered user. Please proceed to the sign up page.");
    } else {
      alert("An error has occured!");
    }
  }

  return errorMessage;
}

//This is to show the user's information
export function getUserinfo() {
  const info = readData();
  return info;
}

//This is to read data from database
export function readData() {
  const userid = getCurrentUser();
  console.log(userid);
  const dbRef = ref(database, "users/");
  let name;
  onValue(dbRef, (DataSnapshot) => {
    const username = DataSnapshot.child(userid)
      .child("firstname")
      .val();
    console.log(username);
    name = username;
  });
  return name;
}
export function getProducts() {
  const dbRef = ref(database, "products/");
  onValue(dbRef, (DataSnapshot) => {
    console.log(DataSnapshot.val());
  });
}
