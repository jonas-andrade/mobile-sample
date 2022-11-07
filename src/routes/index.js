import React from "react";
import { Home ,Detail} from "../screens";
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export const Routes=()=>{


    return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
       
     
      
    )
}