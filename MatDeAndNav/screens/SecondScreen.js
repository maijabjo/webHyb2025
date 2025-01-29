import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default function SecondScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Second Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
    }
});
