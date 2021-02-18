import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import StudyScreen from './src/screens/StudyScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';

const AppTabs = createBottomTabNavigator();
const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name=" " component={OnboardingScreen} />
        <AppStack.Screen
          name="Login" 
          component={LoginScreen}
          options = {{ header: () => null }}
        />
        <AppStack.Screen
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
        <AppStack.Screen
           name='BookDetail' 
           component={BookDetailScreen}
          //  options = {{ header: () => null }}
        />
        <AppStack.Screen
           name='StudyNow' 
           component={StudyScreen}
          //  options = {{ header: () => null }}
        />
        <AppStack.Screen
           name='HomeAppStack' 
           component={AppTabsScreen}
           options = {{ header: () => null }}
        />

      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen 
      name="Home" 
      component={HomeScreen}
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
      component={ProgressScreen}
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

export default App;

