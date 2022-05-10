import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from "react-native";
import AddData from './screens/AddData'

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F2A753',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
      <Stack.Screen
        name="AddData"
        component={AddData}
        options={{ title: "Add Data" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});