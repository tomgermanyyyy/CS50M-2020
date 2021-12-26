import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";

import { login } from '../api'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  _login = async () => {
    try {
      const success = await login(username, password)
      navigation.navigate('Main')
    } catch (err) {
      const errMessage = err.message
      setErr(errMessage)
    }
  }

  handleUsernameUpdate = (username) => {
    setUsername(username)
  }

  handlePasswordUpdate = (password) => {
    setPassword(password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{err}</Text>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={this.handleUsernameUpdate}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={this.handlePasswordUpdate}
        autoCapitalize="none"
        secureTextEntry
      />
      <Button
        title="Press to Log In"
        onPress={_login}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
})
