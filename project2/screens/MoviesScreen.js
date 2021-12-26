import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { Row } from '../components/Row';
import { Loading } from '../components/Loading';

export const MoviesScreen = (props) => {
  const { navigation, route } = props;
  const [movies, setMovies] = useState(null);
  const [ready, setReady] = useState(false);

  //console.log(props);
  //console.log(movies);

  React.useEffect(() => {
    setMovies(route.params?.movies ?? null);
  });

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     alert('Screen is active');
  //     setMovies(route.params?.movies ?? null);
  //     if (movies) {
  //       setReady(true);
  //     }
  //     console.log(movies);
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Search"
          onPress={() => {
            navigation.navigate('SearchScreen');
          }}
        />
      ),
      headerLeft: () => (
        <Button
          title="Log out"
          onPress={() => {
            navigation.dispatch(StackActions.replace('LoginScreen'));
          }}
        />
      ),
    });
  }, [navigation]);

  goToDetails = (movie) => {
    navigation.navigate('MovieDetailsScreen', { movie });
  };

  //console.log(movies != null);

  return movies !== null ? (
    <ScrollView>
      {movies ? (
        movies.map((movie) => <Row movie={movie} goToDetails={goToDetails} />)
      ) : (
        <Loading />
      )}
    </ScrollView>
  ) : (
    <View style={styles.emptyScreen}>
      <Text>No movie to show.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
