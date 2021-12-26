import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts, { compareNames } from './contacts'
import Row from './Row'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  toggleContact = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <Button title="toggle contact" onPress={this.toggleContact} />
        <Button title="sort" onPress={this.sort} />
        <Button title="Add contact" onPress={this.toggleForm} />
        {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  }
});
