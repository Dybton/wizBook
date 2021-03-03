import { transcode } from 'buffer';
import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase, Animated } from 'react-native';
// import Animated from 'react-native-reanimated';
import ContinueButton from '../components/ContinueButton';
import FlipCard from '../components/FlipCard';

const StudyScreen = () => {
    const animate = useRef(new Animated.Value(0));
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
      Animated.timing(animate.current, {
        duration: 200,
        toValue: isFlipped ? 0 : 180,
        useNativeDriver: true
      }).start(() => {
        setIsFlipped(!isFlipped);
      });
    };

    const interpolateFront = animate.current.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });

    const interpolateBack = animate.current.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });

    return (
      <View style={styles.container}>
          <Text> StudyScreen </Text>
          <TouchableOpacity onPress={handleFlip}>
            <Animated.View style={[{ transform: [{ rotateY: interpolateFront}]}, styles.hidden]}>
              <FlipCard 
                question="Hvad spiser katten??"
              />
            </Animated.View>
            <Animated.View style={[{ transform: [{ rotateY: interpolateBack}]}, styles.hidden, styles.back]}> 
              <FlipCard
                question="Fisk?"
              />
            </Animated.View>
            {/* <Button onPress={handleFlip} title="Flip"/> */}
          </TouchableOpacity>
          
      </View>   
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    hidden: {
      backfaceVisibility: 'hidden',
      
    },
    back: {
      position: 'absolute',
      top: 0,
    }
});

export default StudyScreen;