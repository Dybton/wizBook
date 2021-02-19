import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableOpacityBase, Button} from 'react-native';
import BookComponent from './BookComponent';
import BookDetail from '../screens/BookDetailScreen';

const Row = ({books, navigation}) => {
    
    return (
        <View style={styles.myGridContainer}>
            <FlatList
                keyExtractor={(book) => book.author }
                data={books}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('BookDetail', {book: item})}>
                            <BookComponent result={item}/>
                        </TouchableOpacity>
                        )
                    }}
                /> 
        </View>
    );  
};


const styles = StyleSheet.create({
    myGridContainer: {
        // borderWidth: 3,
        // borderColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    myBook: {
        borderWidth: 2,
        borderColor: 'red',
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1,
    }
});

export default Row;