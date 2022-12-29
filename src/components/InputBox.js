import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';

const InputBox = () => {
  const [input, setInput] = useState('');

  const onMicrophone = () => {
    console.warn('microphone in on');
  };

  const onSend = () => {
    console.warn('message sent : ', input);
  };

  const onPress = () => {
    if (!input.length) {
      onMicrophone();
    } else {
      onSend();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Fontawesome5 name="laugh-beam" size={SIZES[6]} color={COLORS.grey} />
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={setInput}
        />
        <Entypo
          name="attachment"
          size={SIZES[6]}
          color={COLORS.grey}
          style={styles.icon}
        />
        {!input.length && (
          <Fontisto
            name="camera"
            size={SIZES[6]}
            color={COLORS.grey}
            style={styles.icon}
          />
        )}
      </View>
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
        {input.length ? (
          <MaterialIcons name="send" size={SIZES[7]} color={COLORS.white} />
        ) : (
          <MaterialCommunityIcons
            name="microphone"
            size={SIZES[7]}
            color={COLORS.white}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    margin: SIZES[2],
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mainContainer: {
    maxHeight: 100,
    backgroundColor: COLORS.white,
    borderRadius: SIZES[6],
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES[2],
    flex: 1,
    paddingHorizontal: SIZES[3],
  },
  textInput: {
    flex: 1,
    marginHorizontal: SIZES[2],
  },
  icon: {
    marginHorizontal: SIZES[1],
  },
  btnContainer: {
    height: SIZES[13],
    width: SIZES[13],
    borderRadius: SIZES[12],
    backgroundColor: COLORS.green_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
