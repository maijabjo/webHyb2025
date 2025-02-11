import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useLayoutEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({navigation}) {

    useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <Ionicons name="arrow-forward" size={24} onPress={() => navigation.navigate('Second')}/>
        )

      })
    })

    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: 100,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
    }
});

