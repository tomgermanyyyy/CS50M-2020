import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import SectionListContacts from '../SectionListContacts';

import { ContactContext } from '../provider/ContactProvider'

export default function ContactListScreen({ navigation }) {
  const [showContacts, setShowContacts] = useState(true)

  toggleContacts = () => {
    setShowContacts(!showContacts)
  }

  showForm = () => navigation.navigate('AddContact');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          color="#a41034"
          onPress={this.showForm}
        />
      ),
      // headerLeft: () => (
      //   <Button
      //     title="Log Out"
      //     onPress={() => navigation.navigate('Login')}
      //   />
      // ),
    });
  }, [navigation]);

  return (
    <ContactContext.Consumer>
      {
        state => (
          <View style={styles.container}>
            <Button title="toggle contacts" onPress={this.toggleContacts} />
            {showContacts && (
              <SectionListContacts
                contacts={state.contacts}
                onSelectContact={contact => {
                  navigation.navigate('ContactDetails', {
                    name: contact.name,
                    phone: contact.phone,
                  })
                }}
              />
            )}
          </View>
        )
      }
    </ContactContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
