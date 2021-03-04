import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from 'react';
import { Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

// Remember to put this into a component, once I have the functionality I need

const StepIndicator = ({ }) => {
    return (
    <View style={{flex: 1}}>
        <ProgressSteps>
            <ProgressStep label="1 Day" previousBtnText="No" nextBtnText="Yes">
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="3 Days" previousBtnText="No" nextBtnText="Yes">
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="1 Week" previousBtnText="No" nextBtnText="Yes">
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="3 Weeks" previousBtnText="No" nextBtnText="Yes">
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
    );
};

const styles = StyleSheet.create({});

export default StepIndicator;
