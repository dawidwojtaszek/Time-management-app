"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const db = getFirestore();
  const createUser = async (userData, userId) => {
    try {
      const docRef = doc(db, "users", userId);
      await setDoc(docRef, userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user != null) {
        const dataRef = doc(db, "users", user.uid);
        const userData = await getDoc(dataRef);
        setUserData(userData.data());
      } else setUserData(null);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    loading,
    signUp,
    logOut,
    logIn,
    createUser,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(FirebaseContext);
