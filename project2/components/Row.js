import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Row = (props) => (
  <TouchableOpacity
    style={styles.textContainer}
    onPress={() => { props.goToDetails(props.movie) }}
  >
    <Text >{props.movie.Title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
})