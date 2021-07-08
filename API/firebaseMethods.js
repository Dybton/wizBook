import {Alert} from "react-native";
import React, { useState } from 'react';

// Firebase
import firebase from 'firebase/app' 
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAWxCFIst-OWvbmTm5BBQPc7M8Adq_OeOo", // note we need to use neuvormnet varaibles before putting it into prod - see instagram clone 42
    authDomain: "react-native-chat-fd3bf.firebaseapp.com",
    projectId: "react-native-chat-fd3bf",
    storageBucket: "react-native-chat-fd3bf.appspot.com",
    messagingSenderId: "225514317181",
    appId: "1:225514317181:web:a63cefca6dc7ccb02f9814"
  };

// // Initialize FB
// if (firebase.apps.length === 0 ) {
//   firebase.initializeApp(firebaseConfig);
// }

// //Getting the books from firebase
// const db = firebase.firestore()
// const booksRef = db.collection('Books')

// export { booksRef }


export async function registration(email, password, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function signIn(email, password) {
  // const [loginErr, setLoginErr] = useState('False')
  let loginErr = false;
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log('something wrongs')
    Alert.alert("There is something wrong!", err.message);
    
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function forgotPassword (email) {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    alert('Please check your email...')
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}


