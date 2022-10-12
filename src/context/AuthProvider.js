import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { auth } from "../components/init-firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { logout } from "../components/init-firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => 
{
  const [currentUser, setCurrentUser] = useState(null);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() 
  {
    //signOut(auth);
    return auth.signOut();
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => 
    {
      if (currentUser) {
        // user is signed in
        setCurrentUser(currentUser);
      }
       else 
       {
        //user is not signed (has no access to the database)
        setCurrentUser(null);
        console.log("Go back to Sign in");
      }
    });
  });

  const values = 
  {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export const useAuthContext = () => React.useContext(AuthContext);
