<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/init-firebase";

export const AuthContext = React.createContext();

export  function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState(null);
=======
import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import { auth } from '../components/init-firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser ] = useState(null);
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
            onAuthStateChanged(auth, (currentUser) => {
                if(currentUser){// user is signed in
                    setCurrentUser(currentUser);
                }else{
                    //user is not signed (has no access to the database)
                    console.log("Go back to Sign in");
                }
            });
    }
    );

    const values = {
        currentUser,login
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
>>>>>>> 5d29616fe24264815ec69d0b62975dc159fa2f1c

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};