"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logOut,
    logIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
