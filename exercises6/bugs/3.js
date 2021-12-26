import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer, CommonActions, StackActions } from '@react-navigation/native';
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

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.label}>Home Screen</Text>
        <Button
          title="Go to Jane's Contact Screen"
          onPress={() => {
            this.props.navigation.navigate('ContactScreen', { name: 'Jane' });
          }}
        />
        <Button
          title="Edit Bob's Contact Screen"
          onPress={() => {
            this.props.navigation.navigate('ContactScreen', {
              name: 'Bob',
              isEditing: true,
            });
          }}
        />
      </View>
    );
  }
}

/////
// Do not edit anything above this line
/////

function ContactScreen({ navigation, route }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        isEditing ? (
          <Button
            onPress={() => { navigation.dispatch(CommonActions.goBack()) }}
            title="Done"
          />
        ) : (
          <Button
            onPress={() => {
              navigation.dispatch(CommonActions.setParams({ isEditing: true }))
            }}
            title="Edit"
          />
        )
      ),
    });
  }, [navigation]);

  const isEditing = route.params?.isEditing ?? false
  const message = isEditing
    ? 'Now editing. Press the upper right "Done" button to go back.'
    : 'Press "Edit" to start editing.';

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>{message}</Text>
    </View>
  );
}

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
          options={({ route }) => ({ title: route.params?.name ?? false })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
