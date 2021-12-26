import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Row = (props) => (
  <View>
    <Text style={styles.row}>{props.item}</Text>
  </View>
)

const styles = StyleSheet.create({
  row: {
    padding: 16,
  }
})