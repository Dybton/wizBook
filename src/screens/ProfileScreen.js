import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import {loggingOut} from '../../API/firebaseMethods';
import firebase from 'firebase/app' 
import 'firebase/firestore'

import Row from '../components/Row';

import { booksRef} from '../../App';

const ProfileScreen = ({ navigation }) => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [userBookTitles, setUserBookTitles] = useState([]);
  const [userBooks, setUserBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
        setUserBookTitles(dataObj.books)
        booksRef.where("title", "in", dataObj.books).onSnapshot(snapshot => (
          setUserBooks(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          ))
      }
    }
    getUserInfo();
    setLoading(false)
  }, [])

  useEffect(() => {
    async function getUserBooks() {
    booksRef.where("title", "in", userBookTitles).onSnapshot(snapshot => (
    setUserBooks(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    ))
  }
  getUserBooks()
  }, [])

      
      // Function that handles navigation back to login on logout
      const handlePress = (doc) => {
          loggingOut();
          navigation.replace('Login')
      }

      if (!loading) {
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
    } else { 
      return (
        <View style={styles.container}>
          <Text> Test </Text>
        </View>
    );
    }
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




// useEffect(() => {
//   // get the user object using the currentUserId

//     usersRef.doc(currentUserUID).get().then((doc) => {
//     if (doc.exists) {
//         helperFunc(doc.data().books);
//         setUserBooks(doc.data().books);
//         console.log('the userbooks are ' + userBooks)
//     } else {
//         console.log("No such document!");
//       }
//   }).catch((error) => {
//       console.log("Error getting document:", error);
//   });
  

//   // What I want is an array with all the books that the user has
//   const helperFunc = (bookArray) => {
//     booksRef.where("title", 'in', bookArray).onSnapshot(snapshot => (
//       (snapshot.docs.map(doc => doc.data()))
//       //NA it seems this helper function get's the titles but it DOESN'T return anything!!' - fix this
//     ))
//   };
// }, [])