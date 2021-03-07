import React from 'react';
import { Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const StepButton = ({ text, btnColor }) => {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.btnTxtWrapper}> 
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '30%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
    alignItems: 'center',
  },
  
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StepButton;

