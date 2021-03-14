import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, Keyboard, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { registration } from '../../API/firebaseMethods'

// import components
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton'; 
import SocialButton from '../components/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const emptyState = () => {
      setFirstName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    };

    // I don't know what the one above is used for
    
    const handlePress = () => {
        if (!firstName) {
          Alert.alert('First name  is required'); 
        } else if (!email) {
          Alert.alert('Email field is required');
        } else if (!password) {
          Alert.alert('password field is required');
        } else if (!confirmPassword) {
          setPassword('');
          Alert.alert('Confirm password field is required.');
        } else if (password !== confirmPassword) {
          Alert.alert('Password does not match!');
        } else {
          registration(
            email,
            password,
            firstName,
          );
          navigation.navigate('Loading');
          emptyState();
        }
    };

    return (
        <View style={styles.container}>
          <Text> Create Account </Text>

          <FormInput
              value = {firstName}
              onChangeText = {(firstName) => setFirstName(firstName)}
              placeholderText="First name"
              iconType="user"
              autoCapitalize='none'
              autoCorrect={false}
          />
          <FormInput
              value = {email}
              onChangeText = {(email) => setEmail(email)}
              placeholderText="Email"
              iconType="user"
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
          />
          <FormInput
              value = {password}
              onChangeText = {(password) => setPassword(password)}
              placeholderText="Password"
              iconType="lock"
              secureTextEntry={true}
          />

          <FormInput
              value = {confirmPassword}
              onChangeText = {(confirmPassword) => setConfirmPassword(confirmPassword)}
              placeholderText="Confirm password"
              iconType="lock"
              secureTextEntry={true}
          />

          <FormButton
              buttonTitle="Sign-up"
              onPress={handlePress}
          />

          <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                  By registering, you confirm that you accept our{' '}
                  </Text>
                  <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                  <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                      Terms of service
                  </Text>
                  </TouchableOpacity>
                  <Text style={styles.color_textPrivate}> and </Text>
                  <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                  Privacy Policy
              </Text>
          </View>



          <SocialButton
              buttonTitle = "Sign up with Facebook"
              btnType = "facebook"
              color = "#4867aa"
              backgroundColor = "#e6eaf4"
              onPress={() => alert('Facebook!')}
          />

          <SocialButton
              buttonTitle = "Sign up with Google"
              btnType = "google"
              color = "#de4d41"
              backgroundColor = "#f5e7ea"
              onPress={() => alert('Google!')}
          />

          <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigation.navigate('Login')}
          >
              <Text style={styles.navButtonText}> Allready have an account? </Text>
          </TouchableOpacity>
          
          {/* <TouchableOpacity 
              style={styles.forgotButton}
              onPress={() => alert('Slob!')}>
              <Text> Forgot Password </Text>
          </TouchableOpacity> */}

        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
    //   fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      color: 'grey',
    },
  });

export default SignUpScreen;