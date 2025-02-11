import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location'

export default function App() {

  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  useEffect(() => {
    getMyLocation()
  }, [])
  
  const getMyLocation = async () => {
    let  { status }  = await Location.requestForegroundPermissionsAsync()

      const position = await Location.getPositionNowAsync({accuracy: Location.Accuracy.High})
      setLocation({...location,"latitude":position.coords.latitude,"longitude":position.coords.longitude})
    } 

  return (
      <Map location={location} 
      /> 
  );
}

