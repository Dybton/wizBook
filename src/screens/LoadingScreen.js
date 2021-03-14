import React, { useEffect } from 'react';
import {Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

const LoadingScreen = ({ navigation }) => {
    useEffect(
        () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.replace('Home');
                    // console.log(user)
                } else {
                    navigation.replace('SignUp')
                }
            });
        }
    );
    
    return (
        <View> 
            <Text> This is a test </Text>
            <ActivityIndicator size='large'/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default LoadingScreen;