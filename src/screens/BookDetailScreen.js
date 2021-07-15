import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';
import { booksRef } from '../../App'

const BookDetail = ({ navigation, route }) => {
    const book = route.params.book;
    console.log(book.creator)

    const AddBook = () => {
        booksRef.doc('Y9d4MtGPFN4zTvm8gPuG').update({
            title: 'Sapiens',
        });
        // we need to get the specific book!
        // Add add user to book
        // Check if user is allreadt on the book
    };

    return <View>
        <Text> Title: {book.title} </Text>
        <Text> Subtitle: {book.subtitle} </Text>
        <Text> Author: {book.author} </Text>
        <Text> Pages: {book.pageNr} </Text>
        {/* <Text> Created by: {book.creator.name} </Text> */}
        {/* <Button title='Choose book' onPress={() => navigation.goBack()} /> */}
        <Button title='Choose book' onPress={AddBook()} />
    </View>

    


};


const styles = StyleSheet.create({});

export default BookDetail;
