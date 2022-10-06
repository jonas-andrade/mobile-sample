import {StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Component_ from './Component.js';
import Home from './Home.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer >
    <Stack.Navigator  initialRouteName='FILMES E SÉRIES & DOCUMENTARIOS'>
      <Stack.Screen name='Home  - EM PROGRESSO' component={Home}/>
      <Stack.Screen name='FILMES E SÉRIES & DOCUMENTARIOS' component={Component_}/>
    </Stack.Navigator>
   </NavigationContainer>
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
