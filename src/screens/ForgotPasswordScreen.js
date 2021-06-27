import React, { useState } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {forgotPassword} from '../../API/firebaseMethods'
import AsyncStorage from '@react-native-async-storage/async-storage';


import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton'; 

const save = async () => {
  try {
    await AsyncStorage.setItem("emailKey", '')
    await AsyncStorage.setItem("passwordKey", '')
  } catch (err) {
    alert(err);
  }
};

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const handlePress = () => {
        if (!email) {
          Alert.alert('Email field is required');
        } else {
            forgotPassword(email);
            save();
        }
    };

    // if email !exist error
    // else 
    // send mail to user + show message ('email has been sent)

    return (
        <View style={styles.container}>
            <Text> Forgot Password Screen </Text>
            <FormInput
              value = {email}
              onChangeText = {(email) => setEmail(email)}
              placeholderText="email"
              iconType="user"
              autoCapitalize='none'
              autoCorrect={false}
            />
            <FormButton
              buttonTitle="Send new password"
              onPress={handlePress}
            />
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