import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Text>Settings coming soon!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export { SettingsScreen }