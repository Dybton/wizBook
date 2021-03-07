import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';
import { color } from 'react-native-reanimated';

type Props = {
    cardQuestion: string;
}

const FlipCard = ({question}) => {
    return (
    <View style={styles.card}> 
        <Text style={styles.cardText}> Question: {question} </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        width: 330,
        height: 330,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
    }
});

export default FlipCard;