//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// create a component
const HomeScreen = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    );
};


//make this component available to the app
export default HomeScreen;
