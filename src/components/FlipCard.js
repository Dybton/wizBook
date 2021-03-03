import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';
import { color } from 'react-native-reanimated';

type Props = {
    cardQuestion: string;
}

const FlipCard = ({question}) => {
    return (
    <View style={styles.card}> 
        <Text> {question} </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
    }
});

export default FlipCard;