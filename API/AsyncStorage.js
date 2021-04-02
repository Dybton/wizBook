import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, Keyboard, ScrollView, SafeAreaView, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const launchStatus = ({ navigation }) => {
    const [firstLaunch, setFirstLaunch] = useState('')
    const saveLaunchStatus = async () => {
        try {
            await AsyncStorage.setItem("isLaunched", true)
        }  catch (err) {
            alert(err);
        }
        console.log('running!')
    };

    const loadLaunchStatus = async () => {
        try {
          let status = await AsyncStorage.getItem("emailKey")
          if (status !== null) {
            setFirstLaunch(status);
          }
          if (password !== null) {
            setPassword(password);
          }
        } catch (err) {
          alert(err);
        }
      };
}


// const SignUpScreen = ({ navigation }) => {
//     const [firstName, setFirstName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
    
//     const emptyState = () => {
//       setFirstName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//     };

//     const save = async () => {
//       try {
//         await AsyncStorage.setItem("emailKey", email)
//         await AsyncStorage.setItem("passwordKey", password)
//       } catch (err) {
//         alert(err);
//       }
//     };

//     const load = async () => {
//       try {
//         let email = await AsyncStorage.getItem("emailKey")
//         let password = await AsyncStorage.getItem("passwordKey")
//         if (email !== null) {
//           setEmail(email);
//         }
//         if (password !== null) {
//           setPassword(password);
//         }
//       } catch (err) {
//         alert(err);
//       }
//     };

//     const remove = async () => {
//       try {
//         await AsyncStorage.setItem("emailKey", '')
//         await AsyncStorage.setItem("passwordKey", '')
//       } catch (err) {
//         alert(err);
//       }
//     };

//     useEffect (() => {
//         load();
//     }, [] );


// const App = () => {
//     const [isFirstLaunch, setIsFirstLaunch] = useState(null);

//     useEffect(()=> {
//         AsyncStorage.getItem('alreadyLaunched').then(value => {
//             if(value == null) {
//                 AsyncStorage.setItem('alreadyLaunched', 'true')
//                 setIsFirstLaunch(true);
//             } else {
//                 setIsFirstLaunch(true);
//             }
//         });
//     }, [])

// if (isFirstLaunch === null) {
//     return null;
// } else if (isFirstLaunch === true) {
//     return (
//         //
//     )
// }

// }   



