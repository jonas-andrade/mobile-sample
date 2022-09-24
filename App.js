import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';

import img from "./assets/asta.jpg";
import Component_ from './Component.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula de React Native </Text>

      <Component_ /> 

      <Image
      style={styles.img}
      source={img}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 1000,
    height: 150
  },
  titulo: { color: '#0B5E70', fontSize: 24, marginBottom: 24}, 
});
