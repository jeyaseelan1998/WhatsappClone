import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {COLORS} from './src/constants/colors';
import {SIZES} from './src/constants/sizes';

import ChatTab from './src/tabs/ChatTab';
import OtherTab from './src/tabs/OtherTab';

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
        component={OtherTab}
        options={{
          tabBarIcon: () => (
            <Fontisto name="camera" size={SIZES[5]} color={COLORS.white} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Chats" component={ChatTab} />
      <Tab.Screen name="Status" component={OtherTab} />
      <Tab.Screen name="Calls" component={OtherTab} />
    </Tab.Navigator>
  );
};

export default ROOT;
