import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

// const Skip = () => (
//     <Button
//         title="Skip"
//         color="#000000"
//     />
// );

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        // SkipButtonComponent={Skip}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
            pages={[
                {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../../assets/wizhat.jpg')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: 'yellow',
                image: <Image source={require('../../assets/wizhat.jpg')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: 'yellow',
                image: <Image source={require('../../assets/wizhat.jpg')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                }
            ]}
        />
    );
}




const styles = StyleSheet.create({});

export default OnboardingScreen;