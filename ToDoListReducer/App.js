import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';
import AddForm from './components/AddForm';


export default function App() {
  return (
    <PaperProvider>
      <MainAppbar />
      <AddForm />
    </PaperProvider>
    
  );
}