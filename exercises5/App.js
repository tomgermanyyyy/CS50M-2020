import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Bug from './bugs/1'
//import Bug from './bugs/2'
//import Bug from './bugs/3'
import Bug from './bugs/4'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bug />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
