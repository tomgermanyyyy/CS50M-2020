import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts from './contacts'

export default class App extends React.Component {
    state = {
        showContacts: false,
    }

    toggleContact = () => {
        this.setState(prevState => ({ showContacts: !prevState.showContacts }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="toggle contact" onPress={this.toggleContact} />
            </View>
        )
    }
}

const styles = StylesSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    }
});
