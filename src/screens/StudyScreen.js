import { transcode } from 'buffer';
import React, { useRef, useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase, Animated } from 'react-native';
// import Animated from 'react-native-reanimated';
import ContinueButton from '../components/ContinueButton';
import StepIndicatorFunction from '../components/StepIndicator';
import FlipComponent from '../components/FlipComponent';
// Components
import Row from '../components/Row';
// Refs
import { cardsRef, userCardRef } from '../../App'
// Firebase
import firebase from 'firebase/app' 
import 'firebase/firestore'


// the users books
// where book title in the card corresponds to the users books (array)

// get the user

const StudyScreen = () => {
  // states
  const [cards, setCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [x, setX] = useState([]);

  // fetching the userID
  const currentUserUID = firebase.auth().currentUser.uid;

  // fetching the userCards associated with this user
  const userCards = userCardRef.where("user", "==", currentUserUID)

  // we need to loop through them all and get the card name:
  
  // we then need all the cards that is tied to the userCards

  useEffect(() => {
    userCards.onSnapshot(snapshot => (
      setCards(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);



  // console.log(cards)

// const movieReviews = {
//    Arrival: 9.5,
//    Alien: 8.9,
//    Amelie: 8
// };



  // for (let card of cards) {
  //   for (let user of Object.keys(card)) {
  //     console.log(user, card[user]);
  //   };
  // }



// I need to loop through the userCards to get a

  return (
    <View>
      <FlipComponent/>
      <StepIndicatorFunction/>
      <ContinueButton/>
      <Text>Your questions and answers </Text>

    </View>
  );
};

const styles = StyleSheet.create({
});

export default StudyScreen;



// Skraldespand

 // const thisUsersCards = userCardRef.doc(currentUserUID+"_Atomic-Habits-Card-1")
  // console.log(thisUsersCards)