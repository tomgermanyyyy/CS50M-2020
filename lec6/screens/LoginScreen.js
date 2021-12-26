import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export default function LoginScreen({ navigation }) {
  _login = () => {
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are currently logged out.</Text>
      <Button
        title="Press to Log In"
        onPress={() => { _login() }}
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
  }
})
