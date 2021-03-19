
import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

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
      },
      console.log(firstName)
      );
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}


export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
      console.log(email)
  } catch (err) {
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