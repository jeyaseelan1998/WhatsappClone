import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeScreen from './src/screens/HomeScreen';
import {COLORS} from './src/constants/colors';
import {SIZES} from './src/constants/sizes';

const Tab = createMaterialTopTabNavigator();

const ROOT = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.green_900,
        },
        tabBarLabelStyle: {
          color: COLORS.white,
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.white,
          height: SIZES[1],
        },
        tabBarPressColor: 'rgba(255, 255, 255, 0.2)',
      }}>
      <Tab.Screen
        name="Camera"
        component={HomeScreen}
        options={{
          tabBarIcon: (color, size) => (
            <Fontisto name="camera" size={SIZES[5]} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Chats" component={HomeScreen} />
      <Tab.Screen name="Status" component={HomeScreen} />
      <Tab.Screen name="Calls" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default ROOT;
