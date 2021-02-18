import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const BookComponent = ({result}) => {
    return <View style={styles.myBook}>
        <Text> Title: {result.name} </Text>
        <Text> Author: {result.author} </Text>
    </View>
};

const styles = StyleSheet.create({
    myBook: {
        borderWidth: 2,
        borderColor: 'red',
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1,
    }
});

export default BookComponent;