import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';

const ChatMessage = ({chat}) => {
  const isMyMessage = chat.user.id === 'u1';
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          isMyMessage ? styles.primaryMessageBox : styles.secondaryMessageBox,
        ]}>
        {!isMyMessage && <Text style={styles.username}>{chat.user.name}</Text>}
        <Text style={styles.message}>{chat.content}</Text>
        <Text style={styles.time}>
          {moment(chat.createdAt).format('hh:mm a')}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    padding: SIZES[2],
  },
  messageBox: {
    // marginVertical: 5,
    padding: SIZES[2],
    borderRadius: SIZES[1],
  },
  primaryMessageBox: {
    marginLeft: SIZES[13],
    backgroundColor: COLORS.green_50,
  },
  secondaryMessageBox: {
    marginRight: SIZES[13],
    backgroundColor: COLORS.white,
  },
  username: {
    color: COLORS.green_500,
    fontWeight: 'bold',
    marginBottom: SIZES[1],
  },
  message: {},
  time: {
    alignSelf: 'flex-end',
    color: COLORS.grey,
  },
});
