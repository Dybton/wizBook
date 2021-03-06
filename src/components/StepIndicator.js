import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React, { useState } from 'react';
import { Text, TouchableOpacity, Button, StyleSheet, View} from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

// Remember to put this into a component, once I have the functionality I need



// const stepChanger = ({}) => {
//     const [count, setCount] = useState(1);
//     return (
//         console.log(count)
//     )
// }

const StepIndicator = ({ }) => {
    const [count, setCount] = useState(1);
    return (
    <View style={{flex: 1}}>
        <ProgressSteps activeStep={count}>
            <ProgressStep
                
                label="Tomorrow" 
                previousBtnText="No" 
                // previousBtnStyle={styles.previousBtnStyle}
                nextBtnText="Yes"
                nextBtnStyle={styles.nextBtnStyle}
                onPrevious={() => setCount(count + 1)}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
                <TouchableOpacity style={styles.previousBtnStyle} onPress={() => setCount(1)}> 
                    <Text>No</Text>
                </TouchableOpacity>
            </ProgressStep>
            <ProgressStep 
                label="1 Day" 
                previousBtnText="No" 
                previousBtnStyle={styles.previousBtnStyle}
                nextBtnText="Yes"
                nextBtnStyle={styles.nextBtnStyle}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep 
                label="1 Day" 
                previousBtnText="No" 
                previousBtnStyle={styles.previousBtnStyle}
                nextBtnText="Yes"
                nextBtnStyle={styles.nextBtnStyle}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep 
                label="1 Day" 
                previousBtnText="No" 
                previousBtnStyle={styles.previousBtnStyle}
                nextBtnText="Yes"
                nextBtnStyle={styles.nextBtnStyle}
                
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep 
                label="1 Day" 
                previousBtnText="No" 
                previousBtnStyle={styles.previousBtnStyle}
                nextBtnText="Yes"
                nextBtnStyle={styles.nextBtnStyle}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
            <ProgressStep 
                label="1 Day" 
                previousBtnText="No" 
                previousBtnStyle={styles.previousBtnStyle}
                nextBtnText="Yes"
                nextBtnStyle={styles.nextBtnStyle}
                finishBtnText="Yes"
            >
                <View style={{ alignItems: 'center' }}>
                    <Text>Did you remember?</Text>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
    );
};

const styles = StyleSheet.create({
    previousBtnStyle: {
        backgroundColor: 'red',
        width: 100,
    },
    nextBtnStyle: {
        backgroundColor: 'green',
        width: 100,
    }
});

export default StepIndicator;
