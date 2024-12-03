import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
// console.log(user);
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const userLogin=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  
  };
  const updateUserProfile = (updatedData)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData);
  }
  // Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Github Login
  const githubLogin = () => {
    setLoading(true);
    
    return signInWithPopup(auth, GithubProvider);
  }
  
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    googleLogin,
    githubLogin,
    setLoading
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {/* Your components here */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
