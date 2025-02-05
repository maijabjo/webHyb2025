import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Row({item, id, select, remove}) {
const backgroundColor = item.id === id ? '#f0f0f0' : '#fff'
  return (
    <Pressable onPress = {() => {select(item.id)}}>
   <Text style= {[styles.rows, {backgroundColor}]}>{item.name}</Text>
   {
    item.id === id && <Ionicons name ="trash" size={24} onPress= {() => remove(item.id)} />
   }
   </Pressable>
  )
}

const styles = StyleSheet.create({
    rows: {
      flex: 1,
      fontsize: 30,
      marginBottom: 10,
      marginLeft: 40,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingTop: 24,
    },
  });