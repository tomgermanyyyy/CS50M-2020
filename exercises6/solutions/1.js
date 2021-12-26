import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

/////
// Do not edit anything above this line
/////

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen');
      }}
    />
  </View>
);

const ContactScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Screen</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  </View>
);

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home"
        }}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: "Contact"
        }}
      />
    </Stack.Navigator>
  )
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    )
  }
}

export default App;
