import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

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

const InfoScreen = ({ route }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Info</Text>
  </View>
);

const FriendsScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Friends</Text>
    <Button
      title="Go to Bob's Contact Screen"
      onPress={() => {
        const pushAction = StackActions.push('ContactScreen', { name: 'Bob' });
        navigation.dispatch(pushAction);
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const Tab = createBottomTabNavigator()

function ContactScreen() {
  return (
    <Tab.Navigator
      initialRouteName="InfoScreen"
      tabBarOptions={{
        activeTintColor: "#a41034",
      }}
    >
      <Tab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{
          tabBarLabel: "Friends",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerTintColor: "#a41034",
        }}
      >
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
          options={({ route }) => ({
            title: route.params?.name ?? false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
