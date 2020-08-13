import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/home';
import { useFonts } from 'expo-font'
import Header from './src/components/header';

export default function App() {
  const [loadedFonts] = useFonts({
    lemonadaBold:require('./src/assets/fonts/Lemonada-Medium.ttf'),
    UbuntuLight:require('./src/assets/fonts/Ubuntu-Light.ttf')
  })
  if(!loadedFonts)
    return null
  return (
    <>
    <StatusBar style={"dark"} />
    <HomePage ></HomePage>
  </>
  )
}