import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';

import { ContactProvider } from './provider/ContactProvider';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function ContactsTab() {
  return (
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{
        headerTintColor: '#a41034',
      }}
    >
      <Stack.Screen
        name="ContactList"
        component={ContactListScreen}
        options={{
          title: "Contacts"
        }}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContactScreen}
        options={{
          title: "Add Contact"
        }}
      />
      <Stack.Screen
        name="ContactDetails"
        component={ContactDetailsScreen}
        options={
          ({ route }) => ({
            title: route.params.name,
          })
        }
      />
    </Stack.Navigator>
  )
}

function MainNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#a41034",
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={`contacts${focused ? "" : "-outline"}`}
              size={25}
              color={focused ? "#a41034" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={`ios-options${focused ? "" : "-outline"}`}
              size={25}
              color={focused ? "#a41034" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const AppNavigator = createSwitchNavigator({
  "Main": MainNavigator,
  "Login": LoginScreen,
}, {
  initialRouteName: "Login"
})

export default class App extends React.Component {
  render() {
    return (
      <ContactProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ContactProvider>
    )
  }
}
