import StepIndicator from 'react-native-step-indicator';
import React, { useState } from "react";
import { Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
 
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
                    // renderStepIndicator={indicators}
                    stepCount="7"
                    customStyles= {'1'}
                />
            </View>
            {/* Put these buttons in their own component */}
            <TouchableOpacity onPress={() => forgotAnswer()}>
                <Text> Prev </Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => rememberAnswer()}>
                <Text> Next </Text> 
            </TouchableOpacity>

        </View>
    );
};

export default StepIndicatorFunction;