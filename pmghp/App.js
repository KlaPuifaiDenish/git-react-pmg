import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, View} from 'react-native';
import AddData from './screens/AddData';
import Reports from './screens/Reports';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOption={{
        headerStyle: {
          backgroundColor: '#0085E6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="AddData"
        component={AddData}
        options={{title: 'Add Data'}}></Stack.Screen>

      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{ title: "Reports" }}
      ></Stack.Screen>
      
    </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
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

