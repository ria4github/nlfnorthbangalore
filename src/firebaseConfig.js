import firebase from "firebase";

const config = {
    apiKey: "AIzaSyABwNYctk7AT7I7ERRh2SkR35Wp8G1h5jI",
    authDomain: "projnlf.firebaseapp.com",
    databaseURL: "https://projnlf.firebaseio.com",
    projectId: "projnlf",
    storageBucket: "projnlf.appspot.com",
    messagingSenderId: "138234965128",
    appId: "1:138234965128:web:1f1c845cfb2c6dd39ac33d",
    measurementId: "G-9DQ2THZG15"
};
firebase.initializeApp( config );

export const firestore = firebase.firestore();
export const app = firebase.app();
export const auth = firebase.auth();
export const functions = firebase.functions();
