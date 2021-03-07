import StepIndicator from 'react-native-step-indicator';
import React, { useState } from "react";
import { Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import StepButton from './StepButtons'
 
const labels = ["1 Day","3 Days","1 Week","2 Weeks", "6 Weeks"];
const indicators = ["1", "2", "3", "4", "5"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
};
 

const StepIndicatorFunction = ({}) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const rememberAnswer = () => {
        (currentPosition < 7 ? setCurrentPosition(currentPosition + 1) : null );
    }
    const forgotAnswer = () => {
        (currentPosition > 0 ? setCurrentPosition(0) : null );
        
    }
    return (
        <View>
            <View>
                <Text> You will see this again in .. </Text>
            </View>
            <View>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    labels={labels}
                    stepCount="7"
                    customStyles= {'1'}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.forgotBtn} onPress={() => forgotAnswer()}>
                    <Text> Forgot </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.rememberBtn} onPress={() => rememberAnswer()}>
                    <Text> Remembered </Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rememberBtn: {
        backgroundColor: 'green',
        marginTop: 10,
        width: '30%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,

    },
    forgotBtn: {
        backgroundColor: 'red',
        marginTop: 10,
        width: '30%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default StepIndicatorFunction;