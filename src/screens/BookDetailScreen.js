import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';
import { booksRef } from '../../App'

// Firebase
import firebase from 'firebase/app' 
import 'firebase/firestore'

const BookDetail = ({ navigation, route }) => {
    const book = route.params.book;
    const currentUserUID = firebase.auth().currentUser.uid;


    // On choose book book should be added to the user's array called books
    // What info do we need?
        // We need the user id/name
        // ad


    const AddBook = () => {
        booksRef.doc(book.id).update({
            title: 'Sapiens',
            users: firebase.firestore.FieldValue.arrayUnion(currentUserUID)
        });
        // Function should only fire on choose book
        console.log('yay')
    };

    return <View>
        <Text> Title: {book.title} </Text>
        <Text> Subtitle: {book.subtitle} </Text>
        <Text> Author: {book.author} </Text>
        <Text> Pages: {book.pageNr} </Text>
        <Text> Id: </Text>
        {/* <Text> Created by: {book.creator.name} </Text> */}
        {/* <Button title='Choose book' onPress={() => navigation.goBack()} /> */}
        <Button title='Choose book' onPress={AddBook} />
    </View>
};

const styles = StyleSheet.create({});
export default BookDetail;
