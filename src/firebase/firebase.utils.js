import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHiGL1JRrnonjg22isGsoLuloypFwm1Mw",
  authDomain: "crwn-db-cfe73.firebaseapp.com",
  projectId: "crwn-db-cfe73",
  storageBucket: "crwn-db-cfe73.appspot.com",
  messagingSenderId: "502216026531",
  appId: "1:502216026531:web:aa94f0372901306d23d216",
  measurementId: "G-JJWJMHR7XC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
