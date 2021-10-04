import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import {loggingOut} from '../../API/firebaseMethods';
import firebase, { firestore } from 'firebase/app' 
import 'firebase/firestore'

import Row from '../components/Row';

import { booksRef} from '../../App';

const ProfileScreen = ({ navigation }) => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [userBooks, setUserBooks] = useState([]);
  
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
        // We get the user name
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
        // Inner function that filters the booksRef with the usersBooks
        booksRef.where("title", "in", dataObj.books).onSnapshot(snapshot => (
          setUserBooks(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          ))
      }
    }
    getUserInfo();
  }, [userBooks]) // Call this the first time page is loaded, and if userBooks is changed.

      // Function that handles navigation back to login on logout
      const handlePress = (doc) => {
          loggingOut();
          navigation.replace('Login')
      }

      return (
          <View style={styles.container}>
            <Text> Hi {firstName} </Text>
            <TouchableOpacity onPress={handlePress}>
            
              <Text> Log out </Text>
            </TouchableOpacity>
            <Row
                    books={userBooks}
            />
          </View>
      ); 
  };

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontSize: 20,
    },
    text: {
        fontSize: 15,
    },
    container: {
        justifyContent: 'center',
        marginTop: 75,
        alignItems: 'center'
    }
});

export default ProfileScreen;