import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Component_ from './Component.js';

export default function App() {
  return (
    <View style={styles.container}>
   
   <Component_></Component_>
      
      
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3b4c',
    
    alignItems: 'center',
    justifyContent: 'center',
  }
});
