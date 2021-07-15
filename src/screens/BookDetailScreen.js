import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';
import { booksRef } from '../../App'

// Firebase
import firebase from 'firebase/app' 
import 'firebase/firestore'

const BookDetail = ({ navigation, route }) => {
    const book = route.params.book;
    const currentUserUID = firebase.auth().currentUser.uid;

    // console.log(book.author)
    // console.log(book)
    console.log(currentUserUID)

    const AddBook = () => {
        booksRef.doc('Y9d4MtGPFN4zTvm8gPuG').update({
            title: 'Sapiens',
            users: firebase.firestore.FieldValue.arrayUnion(currentUserUID)
        });
        // Get the specific book id
        // Function should only fire on choose book




    };

    return <View>
        <Text> Title: {book.title} </Text>
        <Text> Subtitle: {book.subtitle} </Text>
        <Text> Author: {book.author} </Text>
        <Text> Pages: {book.pageNr} </Text>
        <Text> Id: </Text>
        {/* <Text> Created by: {book.creator.name} </Text> */}
        {/* <Button title='Choose book' onPress={() => navigation.goBack()} /> */}
        <Button title='Choose book' onPress={AddBook()} />
    </View>

    


};


const styles = StyleSheet.create({});

export default BookDetail;
