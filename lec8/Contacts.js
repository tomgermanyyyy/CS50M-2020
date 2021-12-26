import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [randomContact, setRandomContact] = useState(null);

  _getRandomContactAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.CONTACTS);
    // let { status } = await Contacts.requestPermissionsAsync()

    if (status !== 'granted') {
      console.log('Permission not granted');
      return;
    }

    let contacts = await Contacts.getContactsAsync({
      pageSize: 1,
      pageOffset: 0,
      fields: [Contacts.Fields.PhoneNumbers],
    });

    let { total } = contacts;
    let n = Math.floor(Math.random() * total);
    console.log(n);

    let randomContact = await Contacts.getContactsAsync({
      pageSize: 1,
      pageOffset: n,
      fields: [Contacts.Fields.PhoneNumbers],
    });

    let { data } = randomContact
    let c = data[0]

    setRandomContact(c);
    console.log(randomContact);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Pick a Random Contact"
        onPress={() => {
          _getRandomContactAsync();
        }}
      />
      {randomContact && <Text>{randomContact.name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
