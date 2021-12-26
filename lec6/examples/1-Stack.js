import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

/* function ScreenComponentOne({navigation}) {
   return (
      <View style={styles.screenOne}>
        <Button
          title="Go to screen two"
          onPress={() => navigation.navigate('RouteNameTwo')}
        />
      </View>
    );
} */

class ScreenComponentOne extends React.Component {
  render() {
    return (
      <View style={styles.screenOne}>
        <Button
          title="Go to screen two"
          onPress={() => this.props.navigation.navigate('RouteNameTwo')}
        />
      </View>
    );
  }
}

function ScreenComponentTwo({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('RouteNameThree', { number: 11 })}
          title="Press me"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screenTwo}>
      <Button
        title="Go to screen three"
        onPress={() =>
          navigation.navigate('RouteNameThree', {
            number: randomNumber(),
          })
        }
      />
    </View>
  );
}

/* function ScreenComponentThree({ navigation, route }) {
  return (
    <View style={styles.screenThree}>
      <Text style={{ fontSize: 25 }}>
        {route.params?.number ?? 'defaultValue'}
      </Text>
      <Button
        title="New number"
        onPress={() =>
          navigation.dispatch(
            CommonActions.setParams({ number: randomNumber() })
          )
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
} */

class ScreenComponentThree extends React.Component {
  render() {
    return (
      <View style={styles.screenThree}>
        <Text style={{ fontSize: 25 }}>
          {this.props.route.params?.number ?? 'defaultValue'}
        </Text>
        <Button
          title="New number"
          onPress={() => this.props.navigation.dispatch(CommonActions.setParams({ number: randomNumber() }))}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RouteNameOne"
        component={ScreenComponentOne}
        options={{
          title: 'First screen',
          headerTintColor: 'teal',
        }}
      />
      <Stack.Screen
        name="RouteNameTwo"
        component={ScreenComponentTwo}
        options={{
          title: 'Screen the second',
          headerTintColor: 'orange',
        }}
      />
      <Stack.Screen
        name="RouteNameThree"
        component={ScreenComponentThree}
        options={({ route }) => ({
          title: `Number: ${route.params?.number ?? 'defaultValue'}`,
          headerTintColor: 'pink',
        })}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'teal',
  },
  screenTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'orange',
  },
  screenThree: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'pink',
  },
});
