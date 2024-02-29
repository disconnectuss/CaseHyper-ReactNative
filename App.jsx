import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomePage from './src/screens/HomePage';
import {colors} from './src/theme/colors';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Confirm from './src/screens/Confirm';
import HeaderComponent from './src/components/HeaderComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({route, previos, navigation}) => (
            <HeaderComponent title={route.name} />
          ),
        }}>
        <Stack.Screen name="Tech Taste" component={HomePage}/>
        <Stack.Screen name="Confirm" component={Confirm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
