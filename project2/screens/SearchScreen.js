import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

import { fetchMovies } from '../api';

const SearchScreen = ({ navigation }) => {

  const [movie, setMovie] = useState(null)

  handleTextUpdate = (text) => {
    setMovie(text)
  }

  handleSearch = async () => {
    const movies = await getMovies()
    navigation.navigate("MoviesScreen", { movies })
  }

  getMovies = async () => {
    const result = await fetchMovies(movie)
    return result
  }

  return (
    <View>
      <Text style={styles.text}>Type into the box to search for movie:</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Avenger"
        onChangeText={handleTextUpdate}
        value={movie}
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    paddingTop: 20,
    paddingLeft: 10,
  }
})

export { SearchScreen }