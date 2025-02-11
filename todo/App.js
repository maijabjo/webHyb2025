import { StatusBar } from 'expo-status-bar';
import { FlatList,  SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import data from './data.js';
import Row from './components/Row.js';
import AddForm from './components/AddForm.js';
import uuid from 'react-native-uuid';
uuid.v4();
import React, {useState, useCallback} from 'react'

export default function App() {
  const [data, setData] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name  
    }
    const tempData = [...data,newItem]
    setData(tempData)
  }, [data])

  const remove = useCallback((id) => {
    const arrayWithoutRemoved = data.filter((item) => item.id!==id)
    setData(arrayWithoutRemoved)
    selectedId(null)
  })
  return (
    <SafeAreaView style={styles.container}>
    <Text style = {styles.title}>ToDo List</Text>
    <AddForm add = {add}/>
    <FlatList style={styles.list}
     data={data}
     keyExtractor={(item) => item.id}
     //extraData={selectedId}
     renderItem = {({item}) => <Row item = {item} id = {selectedId} select = {setSelectedId} remove = {remove} />
     }
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   list: {
    marginLeft: 30,
    top: 80,
   },

  title: {
    fontSize: 20,
    top: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  }

})
