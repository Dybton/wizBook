import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';
import { booksRef } from '../../API/firebaseMethods'

const BookDetail = ({ navigation, route }) => {
    const book = route.params.book;

    return <View>
        <Text> Title: {book.title} </Text>
        <Text> Subtitle: {book.subtitle} </Text>
        <Text> Author: {book.author} </Text>
        <Text> Pages: {book.pageNr} </Text>
        {/* <Button title='Choose book' onPress={() => navigation.goBack()} /> */}
        <Button title='Choose book' onPress={() => console.log(booksRef)} />
    </View>
};

const styles = StyleSheet.create({});

export default BookDetail;
