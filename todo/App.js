import { StatusBar } from 'expo-status-bar';
import { FlatList,  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
uuid.v4();
import React, {useState, useCallback} from 'react'
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';
import AddForm from './components/AddForm';

export default function App() {
  return (
    <PaperProvider>
      <MainAppbar/>
      <AddForm />
    </PaperProvider>
    
  );
}