import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading...</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  }
})