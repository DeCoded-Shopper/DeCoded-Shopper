// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getDatabase, set, ref, onValue} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, 
      createUserWithEmailAndPassword, 
      signInWithEmailAndPassword,
      sendPasswordResetEmail,
      signOut } from 'firebase/auth';

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

export const db = getFirestore(app);
export const auth = getAuth(app);

function createData(userID, email, name, surname){
  Set(ref(database, 'users/' + userID),{
    userID: userID,
    email: email,
    firstname: name,
    lastname: surname
  });
};

export function createUsers(email, password, name, lastName){

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    createData(user, uid, email, name, lastName);
    console.log("account created successfully!");
    alert("success")
  }).catch((error) => {
    const errorMessage = error.message;
    if(errorMessage === "Firebase: Error (auth/email-already-in-use)."){
      console.log(errorMessage);
      alert("Email already exists");
    }else{
      console.log(errorMessage);
    }

  });


}

export const loginUser = (email, password) => {
  let errorMessage;
  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("user has logged in");
    errorMessage = "success";
  } catch(error) {
    errorMessage = "error";
    console.log(error.message);
    alert("An error has occured");
  }

  return errorMessage;

}

function getCurrentUser(){
  const user = auth.currentUser;
  return user.uid;
}

export function resetPass(email){
  let errorMessage;
  try{
    const res = sendPasswordResetEmail(auth, email)
    console.log("success")
    errorMessage = "success";
  } catch(error) {
    errorMessage = error.message;
    if(errorMessage === "Firebase: Error (auth/user-not-found)") {
      alert("You are not registered user. Please proceed to the sign up page.");
    }else{
      alert("An error has occured!");
    }
  };

  return errorMessage;
}

export function getUserinfo(){
  const info = readData();
  return info;
};

export function readData(){
  const userid = getCurrentUser();
  const dbRef = ref(database, 'users/');
  let name;
  onValue(dbRef, (DataSnapshot) =>{
    const username = DataSnapshot
                      .child(userid)
                      .child("firstname")
                      .val();
    console.log(username);
    name = username;
  });
  return name;
};

export const logout = () => {
  signOut(auth);
};