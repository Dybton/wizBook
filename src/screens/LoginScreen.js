import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

// import components
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton'; 
import SocialButton from '../components/SocialButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/wizhat.jpg')}
            style={styles.logo} 
            />
        <Text style={styles.text}> Wizbooks </Text>

        <FormInput
            labelValue = {email}
            onChangeText = {(userEmail) => setEmail(userEmail)}
            placeholderText="email"
            iconType="user"
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
        />
        <FormInput
            labelValue = {password}
            onChangeText = {(userPassword) => setPassword(userPassword)}
            placeholderText="password"
            iconType="lock"
            secureTextEntry={true}
        />

        <FormButton
            buttonTitle="Sign-in"
            onPress={() => navigation.navigate('HomeAppStack')}
        />

        <TouchableOpacity 
            style={styles.forgotButton}
            onPress={() => alert('Test!')}>
            <Text> Forgot Password </Text>
        </TouchableOpacity>

         <SocialButton
            buttonTitle = "Sign in with Facebook"
            btnType = "facebook"
            color = "#4867aa"
            backgroundColor = "#e6eaf4"
            onPress={() => alert('Facebook!')}
        />

        <SocialButton
            buttonTitle = "Sign in with Google"
            btnType = "google"
            color = "#de4d41"
            backgroundColor = "#f5e7ea"
            onPress={() => alert('Google!')}
        />

        <TouchableOpacity 
            style={styles.forgotButton}
            onPress={() => navigation.navigate('SignUp')}
        >
            <Text style={styles.navButtonText}> Don't have an account? </Text>
        </TouchableOpacity>

       

        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 100,
      width: 100,
      resizeMode: 'cover',
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
    forgotButton: {
      marginVertical: 10,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    //   fontFamily: 'Lato-Regular',
    },
  });

export default LoginScreen;