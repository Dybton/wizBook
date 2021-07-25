import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import {loggingOut} from '../../API/firebaseMethods';
import firebase from 'firebase/app' 
import 'firebase/firestore'

import Row from '../components/Row';

import { booksRef, userCardRef, usersRef} from '../../App';

const ProfileScreen = ({ navigation }) => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const [userBookTitles, setUserBookTitles] = useState([]);
  const [userBooks2, setUserBooks2] = useState([]);





  // this is the one we currently use - we need to delete this once we can fetch the books via our user
  const userBooksRef = booksRef.where("users", "array-contains", currentUserUID)

  useEffect(() => {
      // get the user object using the currentUserId - check
    usersRef.doc(currentUserUID).get().then((doc) => {
      if (doc.exists) {
          helperFunc(doc.data().books);
          console.log(doc.data().books);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    // console.log('Userbook titles ' + userBookTitles)


    // What I want is an array with all the books that the user has
    const helperFunc = (bookArray) => {
      booksRef.where("title", 'in', bookArray).onSnapshot(snapshot => (
        setUserBooks2(snapshot.docs.map(doc => doc.data()))
        
      ))
    };
  }, [])

  console.log(userBooks2)

  // https://medium.com/techwasti/firestore-now-supports-in-queries-array-contains-956031f753d4 - cont from here


// NA: query the books using the users array of books from the above


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
        userBooksRef.where("title", "==", "Atomic Habits").onSnapshot(snapshot => (
          setUserBooks(snapshot.docs.map(doc => doc.data()))
          // console.log(userBooks)
        ))
      }, [])
      
      // Don't know what this is
      const handlePress = (doc) => {
          loggingOut();
          navigation.replace('Login')
          // console.log(doc.firstName)
      }

      return (
          <View style={styles.container}>
            <Text> Hi {firstName} </Text>
            <TouchableOpacity onPress={handlePress}>
              <Text> Log out </Text>
            </TouchableOpacity>
            <Row
                    books={userBooks2}
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
