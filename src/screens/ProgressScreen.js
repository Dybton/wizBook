import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';

const ProgressScreen = ({ navigation }) => {
    return (
      <View style={styles.question}>
          <Text> How far have you read?  </Text>
          <Button title="to page 30" onPress={() => navigation.navigate('StudyQuestions')} />
      </View>   
    );
};

const styles = StyleSheet.create({
  question: {
    marginTop: 120
  },
});

export default ProgressScreen;