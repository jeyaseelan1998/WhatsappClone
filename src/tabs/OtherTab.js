import {Text, View} from 'react-native';
import React from 'react';

const OtherScreens = ({route}) => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};

export default OtherScreens;
