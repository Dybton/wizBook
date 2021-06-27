
import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";
import React, { useState } from 'react';


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

  // firebase.auth().sendPasswordResetEmail(email)
  //   .then(function (user) {
  //     alert('Please check your email...')
  //   }).catch(function (e) {
  //     console.log(e)
  //   })
  // console.log(email)
