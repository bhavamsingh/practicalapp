//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from "react-native-vector-icons/FontAwesome"
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

// create a component
const HomeScreen = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{TabBarIcon:()=> 
          {return <FontAwesome name="home"/>
          
        }}}/>

   
  
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
};


//make this component available to the app
export default HomeScreen;
