import { transcode } from 'buffer';
import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase, Animated } from 'react-native';
// import Animated from 'react-native-reanimated';
import ContinueButton from '../components/ContinueButton';
import StepIndicatorFunction from '../components/StepIndicator';
import FlipComponent from '../components/FlipComponent';


const StudyScreen = () => {
  return (
    <View>
      <FlipComponent/>
      <StepIndicatorFunction/>
      <ContinueButton/>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default StudyScreen;