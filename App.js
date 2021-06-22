import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
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


  // const remove = async () => {
  //   try {
  //     await AsyncStorage.removeItem('alreadyLaunched')
  //   } catch (err) {
  //     alert(err)
  //   } finally {
  //     setIsFirstLaunch('')
  //   }
  // }; remove()

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
            options={{ headerShown: false }}
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



// const remove = async () => {
  //   try {
  //     await AsyncStorage.removeItem('alreadyLaunched')
  //   } catch (err) {
  //     alert(err)
  //   } finally {
  //     setIsFirstLaunch('')
  //   }
  // }; remove()


  // This code below works and can be used to check if it's the first time a user has logged in.

// const [isFirstLaunch, setIsFirstLaunch] = useState('')


//   const save = async () => {
//       try {
//         await AsyncStorage.setItem('isFirstLaunchKey', isFirstLaunch)
//       } catch(err) {
//         alert(err);
//       }
//   };

//   const load = async () => {
//     try {
//       let key = await AsyncStorage.getItem('isFirstLaunchKey')
//       if (key === null) {
//         console.log('first launch and key is ' + key)
//         console.log('isFirstLaunch state is ' + isFirstLaunch)
//         setIsFirstLaunch(false)
//         save();
//       } else {
//         console.log('not first launch')
//         save();
//       }
//     } catch(err) {
//       alert(err);
//     }
//   }

//   useEffect(() => {
//     load()
//   }, [])




     // The one from the indian dude 

    // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if(value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true')
  //       setIsFirstLaunch(true);
  //       console.log('first launch')
  //     } else {
  //       setIsFirstLaunch(false)
  //       console.log('not first launch')
  //     }
  //   });
  // }, []);