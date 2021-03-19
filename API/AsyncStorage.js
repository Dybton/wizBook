import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, Keyboard, ScrollView, SafeAreaView, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    useEffect(()=> {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(true);
            }
        });
    }, [])



},   



