import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import chats from '../constants/data/Chats';
import {COLORS} from '../constants/colors';

import ChatMessage from '../components/ChatMessage';
import BackgroundImage from '../components/BackgroundImage';
import InputBox from '../components/InputBox';

const ChatRoomScreen = ({route}) => {
  return (
    <BackgroundImage style={styles.container}>
      <FlatList
        data={chats.messages}
        renderItem={({item}) => <ChatMessage chat={item} />}
        keyExtractor={item => item.id}
      />
      <InputBox />
    </BackgroundImage>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
  },
});
