import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Firebase
import firebase from 'firebase/app' 
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAWxCFIst-OWvbmTm5BBQPc7M8Adq_OeOo",
    authDomain: "react-native-chat-fd3bf.firebaseapp.com",
    projectId: "react-native-chat-fd3bf",
    storageBucket: "react-native-chat-fd3bf.appspot.com",
    messagingSenderId: "225514317181",
    appId: "1:225514317181:web:a63cefca6dc7ccb02f9814"
  };

// if (firebase.apps.length === 0 ) {
//     firebase.initializeApp(firebaseConfig,);
// }

import apiKeys from './config/keys'
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import StudyScreen from './src/screens/StudyScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';

import { set } from 'react-native-reanimated';


const OnboardingStack = createStackNavigator();

const App = ({ navigation }) => {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  
  const [isFirstLaunch, setIsFirstLaunch] = useState('')
  const [statusKeyLoaded, setStatusKeyLoaded] = useState(false)

  useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
        if(value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true')
          setIsFirstLaunch(true);
          console.log('first launch')
          setStatusKeyLoaded(true)
        } else {
          setIsFirstLaunch(false)
          console.log('not first launch')
          setStatusKeyLoaded(true)
        }
      });
    }, []);
  
  if ( statusKeyLoaded === false ) {
    return (
      null 
    )
  } else {if ( isFirstLaunch === null ) {
    return null;
  } else if (isFirstLaunch === true ) {
    return (
      <NavigationContainer>
        <OnboardingStack.Navigator initialRouteName={'Onboarding'}>
          <OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
          <OnboardingStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ header: () => null }}
          />
          <OnboardingStack.Screen
            name='SignUp'
            component={SignUpScreen}
            options={({ navigation }) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              }
            })}
          />
          <OnboardingStack.Screen
            name='Home'
            component={AppTabsScreen}
            options={{ headerShown: false }}
          />
          <OnboardingStack.Screen
            name={'Loading'}
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
        </OnboardingStack.Navigator>
      </NavigationContainer>
    );
  } else { 
  return (
  <NavigationContainer>
      <OnboardingStack.Navigator initialRouteName={'Login'} screenOptions={{ animationEnabled: false, headerShown: false }}>
        <OnboardingStack.Screen name="Onboarding" component={OnboardingScreen} />
        <OnboardingStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null}}
        />
        <OnboardingStack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            }
          })}
        />
        <OnboardingStack.Screen
          name='Home'
          component={AppTabsScreen}
          options={{ headerShown: false }}
        />
        <OnboardingStack.Screen
            name={'ForgotPassword'}
            component={ForgotPasswordScreen}
            options={{ headerShown: true }}
          />
        <OnboardingStack.Screen
          name={'Loading'}
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </OnboardingStack.Navigator>
    </NavigationContainer> )
}};}
  

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />
    <AppTabs.Screen
      name="Study"
      component={StudyStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: (props) => (
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />
    <AppTabs.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />
  </AppTabs.Navigator>
);

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="BookDetail" component={BookDetailScreen} />
    </HomeStack.Navigator>
  );
}

const StudyStack = createStackNavigator();
function StudyStackScreen() {
  return (
    <StudyStack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      <StudyStack.Screen name="SpecifyProgress" component={ProgressScreen} />
      <StudyStack.Screen name="StudyQuestions" component={StudyScreen} />
    </StudyStack.Navigator>
  );
}

export default App;