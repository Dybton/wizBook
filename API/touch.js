import * as firebase from 'firebase';
import "firebase/firestore";

import { Alert } from "react-native";

export async function registration(email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        //cont from here
    }
}