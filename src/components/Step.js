import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from 'react';
import { Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

const StepIndicator = ({ }) => {
    return (
    <View style={{flex: 1}}>
        <ProgressSteps>
            <ProgressStep label="1 Day">
                <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 1!</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="3 Days">
                <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 2!</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="1 Week">
                <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 3!</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="3 Weeks">
                <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 3!</Text>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
    );
};

const styles = StyleSheet.create({});

export default StepIndicator;
