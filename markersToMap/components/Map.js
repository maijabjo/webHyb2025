import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

export default function Map(props) {
  const [markers, setNewMarkers] = useState([])
  const addNewMarker = (coordinates) => {
  const newMarker = {latlng : coordinates}
    if(markers.length > 0){
      setNewMarkers(markers => [...markers, newMarker])
    } else {
      setNewMarkers([newMarker])
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={props.location}
        onLongPress={e => addNewMarker(e.nativeEvent.coordinate)}
      >
        {markers.length > 0 ?markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
          />
        )) : <></>}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  },
  map: {
    height: '100%',
    width: '100%'
  }
});