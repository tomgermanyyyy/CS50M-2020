import React from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.name !== this.state.name || prevState.phone !== this.state.phone) {
      this.validateForm()
    }
  }

  // getHandler = key => val => this.setState({ [key]: val })

  // handleNameChange = this.getHandler('name') // val =>{ this.setState({name: val}) }

  handleNameChange = name => {
    this.setState({ name })
  }

  handlePhoneChange = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone })
    }
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  validateForm = () => {
    const names = this.state.name.split(' ')
    if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3 && names[0] && names[1]) {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  render() {
    //console.error('This is a full page alert!')
    //throw new Error('This is also an erorr!')
    //console.warn('This is a less aggressive warning')
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          //keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
      </KeyboardAvoidingView>
    )
  }
}
