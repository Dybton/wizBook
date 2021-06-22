import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import * as firebase from 'firebase';
import {loggingOut} from '../../API/firebaseMethods';

import Row from '../components/Row';
import books from '../../data/bookData';

    
const ProfileScreen = ({ navigation }) => {
let currentUserUID = firebase.auth().currentUser.uid;
const [firstName, setFirstName] = useState('');

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
      })

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
