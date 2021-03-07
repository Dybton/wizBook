import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';
import WheelPicker from '../components/WheelPicker';


const ProgressScreen = ({ navigation }) => {

    return (
      <View style={styles.container}>
          <Text> How far have you reado?  </Text>
          <View>
            <WheelPicker/> 
            {/* <WheelPicker/>  */}
          </View>
          <Button title="Study!" onPress={() => navigation.navigate('StudyQuestions')} />
      </View>   
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  wheelContainer: {
    flexDirection: 'row'
  },

});

export default ProgressScreen;