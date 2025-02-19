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
                <Text style={item.done == "true" ? styles.taskDone : styles.taskNotDone}>{item.item}</Text>
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
        padding: 5,
        borderWidth: 1,
        width: '100%'
    },
    saveButton: {
        position: 'absolute',
        alignSelf: 'center',
        right: 20,
        paddingRight: 20,
        paddingTop: 2
    },
    saveButtonText: {
        color: 'blue',
        fontSize: 24
    },
    listItem: {
        padding: 5
    },
    lista: {
        marginTop: 10
    },
    taskDone: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 20,
        margin: 10
    },
    taskNotDone: {
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        fontSize: 20,
        margin: 10
    },
   
}); 