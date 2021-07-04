
import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";
import React, { useState } from 'react';

const firebaseConfig = { // note we need to use neuvormnet varaibles before putting it into prod - see instagram clone 42
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const db = firebase.firestore()

// const books1 = firestore().collection('Books');

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


