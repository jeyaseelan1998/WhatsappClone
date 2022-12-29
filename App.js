import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from './src/constants/colors';
import {SIZES} from './src/constants/sizes';
import ROOT from './ROOT';
import ChartRoomScreen from './src/screens/ChatRoomScreen';
import ContactsScreen from './src/screens/ContactsScreen';

const Stack = createNativeStackNavigator();

const RootHeaderRight = () => {
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
const ChatRoomScreenHeaderRighr = () => {
  return (
    <View style={styles.ChartRoomScreenContainer}>
      <MaterialCommunityIcons
        name="video"
        size={SIZES[6]}
        color={COLORS.white}
      />
      <Ionicons name="call" size={SIZES[6]} color={COLORS.white} />
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
    <>
      <StatusBar backgroundColor={COLORS.green_900} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            headerStyle: {
              backgroundColor: COLORS.green_900,
            },
            headerTintColor: COLORS.white,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: COLORS.white,
            },
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            options={{
              headerRight: RootHeaderRight,
              headerTitle: 'Whatsapp',
            }}
            name="ROOT"
            component={ROOT}
          />
          <Stack.Screen
            options={({route}) => ({
              title: route.params.name,
              // headerTitle: () => <Text>{route.params.name}</Text>,
              headerRight: ChatRoomScreenHeaderRighr,
            })}
            name="ChartRoomScreen"
            component={ChartRoomScreen}
          />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          <Stack.Screen name="NotFound" component={ContactsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
  ChartRoomScreenContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
});
