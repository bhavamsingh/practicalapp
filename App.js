/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreen from './src/DrawerNavigator/DrawerScreen';

// import BottomNavigator from './src/BottomNavigator/BottomNavigator';
// import HomeScreen from './src/BottumNavigator/HomeScreen';
// import TopScreen from './src/TopNavigator/TopScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>

    <Stack.Navigator >


    {/* <Stack.Screen
        name="HomeScreeen"  
        headerShown={true}

        component={HomeScreen}

      options={{headerShown:false}}
        /> */}
    {/* <Stack.Screen
        name="TopScreen"  
        headerShown={true}

        component={TopScreen}

      options={{headerShown:false}}
        /> */}
    <Stack.Screen
        name="TopScreen"  
        headerShown={true}

        component={DrawerScreen}
        />
        </Stack.Navigator >
        
        </NavigationContainer>
      )}
export default App;
