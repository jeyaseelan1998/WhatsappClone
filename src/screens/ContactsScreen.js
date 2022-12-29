import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';

import ContactListItem from '../components/ContactListItem';
import contacts from '../constants/data/Users';

const ContactsScreen = () => {
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({item}) => <ContactListItem contact={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
