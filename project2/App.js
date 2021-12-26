import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { LoginScreen } from './screens/LoginScreen';
import { SearchScreen } from './screens/SearchScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { MoviesScreen } from './screens/MoviesScreen';
import { MovieDetailsScreen } from './screens/MovieDetailsScreen';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const MovieStack = createStackNavigator()

function MoviesTab() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{
          title: "Movies",
        }}
      />
      <MovieStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Search",
        }}
      />
      <MovieStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{
          title: "Details",
        }}
      />
    </MovieStack.Navigator>
  )
}

function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MoviesTab"
      tabBarOptions={{
        activeTintColor: '#007aff',
      }}
    >
      <Tab.Screen
        name="MoviesTab"
        component={MoviesTab}
        options={{
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <Icon name="film" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="wrench" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
      />
    </Stack.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
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
