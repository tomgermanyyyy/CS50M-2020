import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export const MovieDetailsScreen = ({ route }) => {

  return (
    <ScrollView>
      <Text style={styles.text}>Title: {route.params.movie.Title} </Text>
      <Text style={styles.text}>Year: {route.params.movie.Year}</Text>
      <Text style={styles.text}>imdbID: {route.params.movie.imdbID}</Text>
      <Text style={styles.text}>Type: {route.params.movie.Type}</Text>
      <View style={styles.posterContainer}>
        <Image
          style={styles.poster}
          source={{ uri: route.params.movie.Poster, }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  posterContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  poster: {
    width: 300,
    height: 450,
  },
})