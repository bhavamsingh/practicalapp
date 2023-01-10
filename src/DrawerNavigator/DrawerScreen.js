//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home2 from '../screen3/Home2';
import Profile2 from '../screen3/Profile2';
import Settings2 from '../screen3/Settings2';

const Drawer = createDrawerNavigator();

// create a component
const DrawerScreen = () => {
    return (
    
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home2} />
        <Drawer.Screen name="Profile" component={Profile2} />
        <Drawer.Screen name="Settings" component={Settings2} />
      </Drawer.Navigator>
    
  
    );
};


//make this component available to the app
export default DrawerScreen;
