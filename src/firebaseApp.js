import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {getDatabase, ref, set, push, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGHJfsDB0MSA02KjZy_JJPSqpc7iQ517Q",
  authDomain: "turnout-868d9.firebaseapp.com",
  projectId: "turnout-868d9",
  storageBucket: "turnout-868d9.appspot.com",
  messagingSenderId: "973626452211",
  appId: "1:973626452211:web:fe5b37ecb6ad69f777af86",
  measurementId: "G-J6QQKTMLFW"
};

export const firebaseApp = {
  app : initializeApp(firebaseConfig),
  auth : getAuth(),
  sign_in : signInWithEmailAndPassword,
  sign_up : createUserWithEmailAndPassword,
  sign_out : signOut
}

export const eventsRef = {
  db : getDatabase(),
  ref : ref,
  set : set,
  push : push,
  onValue : onValue,
}