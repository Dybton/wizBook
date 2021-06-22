import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

const ForgotPasswordScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Text> Forgot Password Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
});

export default ForgotPasswordScreen;