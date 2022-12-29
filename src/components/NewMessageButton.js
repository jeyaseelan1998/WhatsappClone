import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const NewMessageButton = ({style}) => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate('Contacts');
  };
  return (
    <TouchableOpacity onPress={onNavigate} style={[styles.container, style]}>
      <MaterialCommunityIcons
        name="message-text"
        size={SIZES[7]}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
};

export default NewMessageButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES[15],
    height: SIZES[15],
    borderRadius: SIZES[12],
    backgroundColor: COLORS.green_500,
    transform: [{rotateY: '180deg'}],
  },
});
