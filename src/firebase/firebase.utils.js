import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "clothing-shop-db-994c8.firebaseapp.com",
  databaseURL: "https://clothing-shop-db-994c8.firebaseio.com",
  projectId: "clothing-shop-db-994c8",
  storageBucket: "clothing-shop-db-994c8.appspot.com",
  messagingSenderId: "493520233612",
  appId: "1:493520233612:web:1d3a52376ab364477187a9",
  measurementId: "G-H65G83WW7V",
};

firebase.initializeApp(config);

//some code for setting up the firebase

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
