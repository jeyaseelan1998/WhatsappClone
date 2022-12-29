import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';

const ContactListItem = ({contact}) => {
  const {name, imageUri, status} = contact;
  const navigation = useNavigation();

  const pressHandler = () => {
    // navigation.navigate('ChartRoomScreen', {
    //   id,
    //   name,
    // });
  };

  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      onPress={pressHandler}
      style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri: imageUri}} style={styles.avatar} />

        <View style={styles.midContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={1} style={styles.status}>
            {status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES[2],
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    height: SIZES[15],
    width: SIZES[15],
    resizeMode: 'contain',
    borderRadius: SIZES[10],
    marginRight: SIZES[3],
  },
  name: {
    fontSize: SIZES[4],
    fontWeight: 'bold',
    color: COLORS.black,
  },
  status: {
    fontSize: SIZES[4],
    color: 'grey',
  },
  time: {
    fontSize: SIZES[3],
    color: 'grey',
  },
  midContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
