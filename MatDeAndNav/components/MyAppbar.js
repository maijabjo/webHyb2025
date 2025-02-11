import * as React from 'react';
import { Appbar, Button, PaperProvider } from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyAppbar = () => (
  <PaperProvider>
  <NavigationContainer>
  <Appbar.Header>
    <Ionicons name="android" size={24}/>
    <Appbar.Content title="MD Nav Demo" />  
  </Appbar.Header>  
  </NavigationContainer>
  </PaperProvider>
);

export default MyAppbar;










