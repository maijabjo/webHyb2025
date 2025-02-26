import { View, StyleSheet, TextInput, Text, Button, Pressable, FlatList } from 'react-native'
import React, { useReducer} from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'task_draft': {
            return {
                draft: action.nextDraft,
                tasks: state.tasks,
            };
        };
        case 'added_task': {
            return {
                draft: '',
                tasks: [{
                    id: state.tasks.length,
                    text: state.draft
                }, ...state.tasks]
            };
        };
        case 'remove_task': {
            return {
                draft: '',
                tasks: state.tasks.filter(item => item.id !== action.id)
            };
        }
    }   
}

export default function AddForm() {

        const [state, dispatch] = useReducer(reducer, { draft: '', tasks: [] });
    
        const renderItem = ({ item }) => {
    
            return (
                <Pressable
                    onPress={() => {
                        dispatch({ 
                            type: 'remove_task',
                            id: item.id
                         });
                      }}
                    hitSlop={10}
                >
                    <Text style={styles.listItem}>{item.text}</Text>
                </Pressable>
            )
        }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Item name...'
                style={styles.textInput}
                value={state.draft}
                onChangeText={e => { dispatch({
                      type: 'task_draft',
                      nextDraft: e
                    })
                  }}
            >
            </TextInput>
            <Pressable
                style={styles.saveButton}
                onPress={() => {
                    dispatch({ type: 'added_task' });
                  }} 
            >
                <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
            <FlatList
                style = {styles.textOnTheList}
                data={state.tasks}
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
    textOnTheList:{
        marginLeft: 30,
        top: 20,
    }
}); 