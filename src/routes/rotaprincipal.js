
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

export default function rotaprincipal(){
    return (
      <NavigationContainer
        independent={true}
      >
        <Stack.Navigator initialRouteName="Home" options={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}