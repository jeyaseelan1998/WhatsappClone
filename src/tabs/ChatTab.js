import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatListItem from '../components/ChatListItem';

import chatRoomMock from '../constants/data/ChatRooms';

const ChatTab = () => {
  return (
    <View>
      <FlatList
        data={chatRoomMock}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({});
