import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

const BookDetail = ({ navigation, route }) => {
    const book = route.params.book;

    return <View>
        <Text> Title: {book.name} </Text>
        <Text> Title: {book.author} </Text>
        <Button title='Choose book' onPress={() => navigation.goBack()} />
    </View>
};

const styles = StyleSheet.create({});

export default BookDetail;