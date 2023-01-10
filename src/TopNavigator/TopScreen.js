//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home1 from '../screen2/Home1';
import Profile1 from '../screen2/Profile1';
import Settings1 from '../screen2/Settings1';

const Tab = createMaterialTopTabNavigator();


// create a component
const TopScreen = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home1" component={Home1} />

   
  
        <Tab.Screen name="Profile1" component={Profile1} />
        <Tab.Screen name="Settings1" component={Settings1} />
      </Tab.Navigator>
    );
};


//make this component available to the app
export default TopScreen;
