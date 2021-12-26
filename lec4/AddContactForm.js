import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 20,
  },
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  }

  state = {
    name: '',
    phone: '',
  }

  handleNameChange = name => {
    this.setState({ name })
  }

  handlePhoneChange = phone => {
    this.setState({ phone })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
          keyboardType="numeric"
        />
        <Button title="Add contact" />
      </View>
    )
  }
}