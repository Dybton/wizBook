import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';
import WheelPicker from '../components/WheelPicker';
import 'firebase/firestore'
import firebase from 'firebase/app' 

// Let's make it work for one book first
// We need to get the user

const ProgressScreen = ({ navigation }) => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const [books, setBooks] = useState([]);
  const [bookIndex, setBookIndex] = useState(0)

  useEffect(() => {
    // Here we get the user data, via a get statement
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get();
      
      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        // We get the user namee
        let dataObj = doc.data();
        setBooks(dataObj.books);
      }
    }
    getUserInfo();
  }, []) // Call this the first time page is loaded, and if userBooks is changed.
  
  const nextBook = (() => {
    if (bookIndex < books.length - 1) {
      setBookIndex(bookIndex + 1)
    }
    console.log(books.length)
  })

    return (
      <View style={styles.container}>
          <Text> How far have you read? </Text>
          <Text> {books[bookIndex]} </Text>
          <View>
            {/* we need to hand the number of pages to the wheelpicker  - Check */}
            {/* we also need to pass where the user left off  - Check */}
            {/* Both of these are passed to wheelpicker, now I just need to get the actual values from the database! */}
            {/* Once the user presses study and uses the last page, the book should go from reading to read */}
            <WheelPicker
            pages={10}
            currentProgress={3}
            /> 
          </View>
          <Button title="Next book!" onPress={() => nextBook()} />
          <Button title="Study!" onPress={() => navigation.navigate('StudyQuestions')} />
      </View>   
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  wheelContainer: {
    flexDirection: 'row'
  },

});

export default ProgressScreen;