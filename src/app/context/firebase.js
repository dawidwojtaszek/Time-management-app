"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [localTasks, setLocalTasks] = useState(null);
  const [localProjects, setLocalProject] = useState(null);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const db = getFirestore();
  const setUserDataInStorage = async (userData, userId) => {
    try {
      const docRef = doc(db, "users", userId);
      await setDoc(docRef, userData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateLocalUserData = async () => {
    const dataRef = doc(db, "users", currentUser.uid);
    const currentData = await getDoc(dataRef);
    setUserData(currentData.data());
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);

      if (user != null) {
        setLoading(true);
        const dataRef = doc(db, "users", user.uid);
        const userData = await getDoc(dataRef);
        setUserData(userData.data());
        setLocalTasks(userData.data().tasks);
        setLocalProject(userData.data().projects);
        setLoading(false);
      } else {
        setUserData(null);
        setLocalTasks(null);
        setLocalProject(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    loading,
    localTasks,
    localProjects,
    signUp,
    logOut,
    logIn,
    setLocalProject,
    setLocalTasks,
    setUserDataInStorage,
    updateLocalUserData,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(FirebaseContext);
