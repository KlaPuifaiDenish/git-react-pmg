import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, View} from 'react-native';
import AddData from './screens/AddData';
import Reports from './screens/Reports';
import Reports1 from './screens/screens_sub/Report1';
import Reports2 from './screens/screens_sub/Report2';
import Reports3 from './screens/screens_sub/Report3';

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
        options={{title: 'Reports'}}></Stack.Screen>
      <Stack.Screen
        name="Reports1"
        component={Reports1}
        options={{title: 'Reports1'}}></Stack.Screen>

      <Stack.Screen
        name="Reports2"
        component={Reports2}
        options={{title: 'Reports2'}}></Stack.Screen>
      <Stack.Screen
        name="Reports3"
        component={Reports3}
        options={{title: 'Reports3'}}></Stack.Screen>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
