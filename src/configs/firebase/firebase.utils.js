import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC3zEh6rzdQ647T4XN_xdgosfRna1IDcyw",
  authDomain: "shopping-store-4dd32.firebaseapp.com",
  projectId: "shopping-store-4dd32",
  storageBucket: "shopping-store-4dd32.appspot.com",
  messagingSenderId: "748904073965",
  appId: "1:748904073965:web:04287f70e17b015e0adae4",
  measurementId: "G-312Z8NQ1D8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error("Error creating user ", err);
    }
  }
  return userRef;
};

export default firebase;
