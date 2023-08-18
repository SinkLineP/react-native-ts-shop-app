import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/navigators/TabNavigator";

export default function App() {
  return (
    <>
      <AppWrapper />
      <StatusBar style="auto" />
    </>
  );
}

const AppWrapper =  () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
