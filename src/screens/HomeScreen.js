import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Row from '../components/Row';
import books from '../../data/bookData';



const HomeScreen = ({ navigation }) => {
    console.log(books)

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.header}> Your books </Text>
            </View>
            <View>
                <Row
                    books={books}
                    navigation={navigation}
                />
            </View>
        </View>
    );  
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontSize: 20,
    },
    text: {
        fontSize: 15,
    },
    container: {
        justifyContent: 'center',
        // borderColor: 'blue',
        // borderWidth: 3,
        alignItems: 'center'
    }

});

export default HomeScreen;