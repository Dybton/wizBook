import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import {loggingOut} from '../../API/firebaseMethods';
import firebase from 'firebase/app' 
import 'firebase/firestore'

import Row from '../components/Row';
import books from '../../data/bookData';

import { booksRef } from '../../App';

const ProfileScreen = ({ navigation }) => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const userBooksRef = booksRef.where("users", "array-contains", currentUserUID)

  const [firstName, setFirstName] = useState('');
  const [userBooks, setUserBooks] = useState([]);


      // First function
      useEffect(() => {
          
          async function getUserInfo(){
            let doc = await firebase
            .firestore()
            .collection('users')
            .doc(currentUserUID)
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setFirstName(dataObj.firstName)
            }
          }

          getUserInfo();
        }, [])
      
      // Second function
      useEffect(() => {
        userBooksRef.onSnapshot(snapshot => (
          setUserBooks(snapshot.docs.map(doc => doc.data()))
        ))
        console.log(userBooks)
      }, [])
      
      // Don't know what this is
      const handlePress = (doc) => {
          loggingOut();
          navigation.replace('Login')
          console.log(doc.firstName)
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
        // borderColor: 'blue',
        // borderWidth: 3,
        alignItems: 'center'
    }

});

export default ProfileScreen;
