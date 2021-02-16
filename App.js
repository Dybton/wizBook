import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

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
           name='Home' 
           component={HomeScreen}
           options = {{ header: () => null }}
           />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;