import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
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

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen', { name: 'Jane' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const ContactScreen = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>
      {route.params?.name ?? 'defaultValue'}'s Contact Screen
    </Text>
    <Button
      title="Go to Lucy's Contact screen"
      onPress={() => {
        const pushAction = StackActions.push('ContactScreen', { name: 'Lucy' });
        navigation.dispatch(pushAction);
      }}
    />
  </View>
);

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{
            title: "Contact",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
