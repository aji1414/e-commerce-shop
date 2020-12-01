import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyCAdIqlGoHpWZieq5q7ClRFjGmte1ZsdNA",
    authDomain: "e-commerce-shop-a8d79.firebaseapp.com",
    databaseURL: "https://e-commerce-shop-a8d79.firebaseio.com",
    projectId: "e-commerce-shop-a8d79",
    storageBucket: "e-commerce-shop-a8d79.appspot.com",
    messagingSenderId: "598934803920",
    appId: "1:598934803920:web:8ddaaa3bdb634d19dd95d5",
    measurementId: "G-GFK1HH8T0T"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;