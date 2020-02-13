import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyBtUh0iV9RXtJtz34_VRHCwloW1gyqrV2U",
  authDomain: "nlfyelahanka.firebaseapp.com",
  databaseURL: "https://nlfyelahanka.firebaseio.com",
  projectId: "nlfyelahanka",
  storageBucket: "nlfyelahanka.appspot.com",
  messagingSenderId: "500810450926"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const app = firebase.app();
export const auth = firebase.auth();
export const functions = firebase.functions();
