import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import { StatusBar } from 'expo-status-bar';


const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#242034',
    alignItems: 'center',
  }
});

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar />
        <MainStack />
    </NavigationContainer>
  );
}


