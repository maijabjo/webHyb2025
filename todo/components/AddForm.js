import { View, StyleSheet, TextInput, Text, Button, Pressable, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState} from 'react'


async function save(key, value) {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.log(error)
    }
}

async function getValueFor(key) {

    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log(value);
            return value;
        }
    } catch (error) {
    
        console.log(error)
    }
}

let initializedlist = 0;

export default function AddForm() {
    const [theList, setTheList] = useState([])
    const [itemToAdd, setItemToAdd] = useState('')

    const saveTo = () => {
        let newList = { id: theList.length + 1, item: itemToAdd, done: 'false' }

        if (theList.length > 0) {
            setTheList(theList => [...theList, newList])
        } else {
            setTheList([newList])
        }
        setItemToAdd('')
    }

    const renderItem = ({ item }) => {
        let style = "textDecoration:"
        if (item.done == "true") {
            style += 'line-through;'
        } else {
            style += 'line-through;'
        }
        return (
            <Pressable
                onPress={() => { setTaskDone(item.id) }}
                hitSlop={10}
            >
                <Text style={item.done == "true" ? styles.doneTask : styles.notDone}>{item.item}</Text>
            </Pressable>
        )
    }

    const setTaskDone = (id) => {

        let newList = [];
        for (let i = 0; i < theList.length; i++) {
            newList[i] = theList[i]
            if (theList[i].id == id) {
                if (theList[i].done == 'false') {
                    newList[i].done = 'true'
                    console.log("Setting task " + id + " as done")
                } else {
                    newList[i].done = 'false'
                    console.log("Setting task " + id + " as not done")
                }
            }
        }
        setTheList(newList)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Item name...'
                style={styles.textInput}
                value={itemToAdd}
                onChangeText={newText => setItemToAdd(newText)}
            >
            </TextInput>
            <Pressable
                style={styles.saveButton}
                onPress={saveTo}
            >
                <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
            <FlatList
                data={theList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        
    },
    saveButton: {
        backgroundColor: 'grey',
        width: 90,
        height: 40,
        position: 'absolute',
        right: 50,
        paddingRight: 20,
        paddingTop: 2
    },
    saveButtonText: {
        color: 'blue',
        fontSize: 24, 
        marginLeft: 15, 
    },
    doneTask: {
        fontSize: 25,
        margin: 10,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
       
    },
    notDone: {
        fontSize: 25,
        margin: 10,
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        
    },
   
}); 