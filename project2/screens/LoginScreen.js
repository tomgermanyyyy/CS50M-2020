import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>You're currently logged out.</Text>
    <Button
      title="Press to login"
      onPress={() => { navigation.dispatch(StackActions.replace("MainNavigator")) }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export { LoginScreen }