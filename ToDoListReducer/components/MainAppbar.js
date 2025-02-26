import { Appbar } from 'react-native-paper';
import React from 'react'
import { StyleSheet } from 'react-native';

export default function MainAppbar() {
  return (
    <Appbar.Header  >
    <Appbar.Content title="My ToDo List" style={appStyle.header}/>
  </Appbar.Header>
)
}
const appStyle = StyleSheet.create({
header: {
  textAlignVertical: 'top',
  width:'100%',
  textAlign:'center',
  alignItems:'center'
}
}); 