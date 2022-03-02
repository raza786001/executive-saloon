import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Screen
import BottomTabNavigation from './src/BottomTabNavigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }} >
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}