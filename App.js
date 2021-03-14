import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import apiKeys from './config/keys'


import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import StudyScreen from './src/screens/StudyScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';


const OnboardingStack = createStackNavigator();

const App = () => {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <OnboardingStack.Navigator>
        <OnboardingStack.Screen name=" " component={OnboardingScreen} />
        <OnboardingStack.Screen
          name="Login" 
          component={LoginScreen}
          options = {{ header: () => null }}
        />
        <OnboardingStack.Screen
          name='SignUp' 
          component={SignUpScreen}
          options = {({navigation}) => ({
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
}

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
          component={HomeScreen }
          options={{ headerShown: false }}
        />
        <HomeStack.Screen name="BookDetail" component={BookDetailScreen} />
      </HomeStack.Navigator>
    );
  }

const StudyStack = createStackNavigator();
function StudyStackScreen() {
    return (
      <StudyStack.Navigator>
        <StudyStack.Screen name="SpecifyProgress" component={ProgressScreen} />
        <StudyStack.Screen name="StudyQuestions" component={StudyScreen} />
      </StudyStack.Navigator>
    );
  }

export default App;


