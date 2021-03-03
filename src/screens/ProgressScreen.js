import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';
import WheelPicker from '../components/WheelPicker';

const ProgressScreen = ({ navigation }) => {
    return (
      <View style={styles.question}>
          <Text> How far have you read?  </Text>
          <WheelPicker/> 
          {/* <WheelPicker/>  */}
          <Button title="Study!" onPress={() => navigation.navigate('StudyQuestions')} />
      </View>   
    );
};

const styles = StyleSheet.create({
  question: {
    marginTop: 120
  },
});

export default ProgressScreen;