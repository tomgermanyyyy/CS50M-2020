import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomCount, { num } from './Count.js'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomCount count={num} />
            </View>
        )
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