import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {asserts} from '../constants/asserts';

const BackgroundImage = ({children, style}) => {
  return (
    <ImageBackground style={style} resizeMode="cover" source={asserts.BG}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
