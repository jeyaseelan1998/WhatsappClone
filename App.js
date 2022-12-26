import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from './src/constants/colors';
import {SIZES} from './src/constants/sizes';
import ROOT from './ROOT';

const Stack = createNativeStackNavigator();

const HeaderRight = () => {
  return (
    <View style={styles.headerRight}>
      <Octicons name="search" size={SIZES[6]} color={COLORS.white} />
      <MaterialCommunityIcons
        name="dots-vertical"
        size={SIZES[6]}
        color={COLORS.white}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.green_900,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.white,
          headerTitle: 'Whatsapp',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: HeaderRight,
        }}>
        <Stack.Screen name="ROOT" component={ROOT} />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const NotFound = () => {
  return (
    <View>
      <Text>NotFound</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    width: SIZES[15],
    // marginRight: SIZES[1],
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
