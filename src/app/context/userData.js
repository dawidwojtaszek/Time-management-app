"use client";
import { createContext, useState, useContext, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const db = getFirestore();

  const createUser = async (userData, userId) => {
    try {
      const docRef = doc(db, "users", userId);
      await setDoc(docRef, userData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {}, []);

  const value = {
    userData,
    createUser,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
