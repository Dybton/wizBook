import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import {loggingOut} from '../../API/firebaseMethods';
import firebase from 'firebase/app' 
import 'firebase/firestore'

import Row from '../components/Row';

import { booksRef, usersRef} from '../../App';

const ProfileScreen = ({ navigation }) => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    // get the user object using the currentUserId
  
      usersRef.doc(currentUserUID).get().then((doc) => {
      if (doc.exists) {
          helperFunc(doc.data().books);
          setUserBooks(doc.data().books);
          console.log('the userbooks are ' + userBooks)
      } else {
          console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    

    // What I want is an array with all the books that the user has
    const helperFunc = (bookArray) => {
      booksRef.where("title", 'in', bookArray).onSnapshot(snapshot => (
        (snapshot.docs.map(doc => doc.data()))
        //NA it seems this helper function get's the titles but it DOESN'T return anything!!' - fix this
      ))
    };
  }, [])

  // https://medium.com/techwasti/firestore-now-supports-in-queries-array-contains-956031f753d4 - cont from here

// NA: query the books using the users array of books from the above
// So currently i'm only getting the titles of the books - but I need to get the entire object! Thats the next goal


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
    
      
      // Don't know what this is
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
        // borderColor: 'blue',
        // borderWidth: 3,
        alignItems: 'center'
    }

});

export default ProfileScreen;
