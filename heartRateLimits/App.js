import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [age, setAge] = useState (' ')
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  const calculate = () => {
    const resultLower = age * 0.65
    setLower(resultLower)
  const resultUpper = age * 0.85
  setUpper(resultUpper)
  }

  return (
    <View style={styles.container}>
      <Text>HEART RATE LIMITS</Text>
      <Text></Text>
      <Text>AGE:</Text>
      <TextInput
      placeholder="Write yor age here: "
      value ={age}
      onChangeText={text => setAge(text)}
      keyboardType = 'decimal-pad'
       />
        <Text></Text>
      <Text style = {styles.field}>Limits:</Text>
      <Text style = {styles.field}>{lower.toFixed(2)} - {upper.toFixed(2)}</Text>
      <Text></Text>
      <Button title ="CALCULATE" onPress = {calculate}></Button>    
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    paddingTop: 20,
    margin: 8,  
    marginTop: 40, 

  },

  field: {
    marginBottom: 10  
  }
});
