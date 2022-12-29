import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatListItem from '../components/ChatListItem';

import chatRoomMock from '../constants/data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';
import {SIZES} from '../constants/sizes';

const ChatTab = () => {
  return (
    <View>
      <FlatList
        data={chatRoomMock}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
      />
      <NewMessageButton style={styles.newMessageButton} />
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({
  newMessageButton: {
    position: 'absolute',
    right: SIZES[5],
    bottom: SIZES[5],
  },
});
