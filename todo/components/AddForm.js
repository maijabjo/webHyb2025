import { View, StyleSheet, TextInput, Text, Button} from 'react-native'
import React, {useState} from 'react'

export default function AddForm({add}) {
    const [name, setName] = useState('')

    const save = () => {
      add(name)
      setName("")  
    }
  return (
    <View style = {styles.container}>
    <TextInput style = {styles.form}
    value = {name}
    onChangeText={text => setName(text)}
    placeholder="Item name..."
  />
  <Button title = "Save"/>
 </View>
      
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingTop: 24,
        top: 60,
        marginLeft: 40,
        marginRight: 40, 
    }
});