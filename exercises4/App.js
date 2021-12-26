import React from 'react';
import { StyleSheet, Text, View, SectionList, Button } from 'react-native';
import Constants from 'expo-constants';

import { Row } from './Row';
import { ModifyObjectForm } from './ModifyObjectForm'

const DEFAULT_OBJECT = {
  foo: 'bar',
  baz: ['qux', 'quux', 'quuz', 'corge'],
}

const renderItem = ({ item }) => <Row item={item} />

const renderSectionHeader = obj => (
  <View>
    <Text style={styles.header}>{obj.section.title}</Text>
  </View>
)

const convertToArray = (key) => {
  if (!Array.isArray(DEFAULT_OBJECT[key])) {
    return [DEFAULT_OBJECT[key]]
  }
  return DEFAULT_OBJECT[key]
}

// const toArray = val => val instanceof Array ? val : [val]

const sections = Object.keys(DEFAULT_OBJECT).sort().map(key => ({
  key,
  title: key,
  data: convertToArray(key),
}))

export default class App extends React.Component {

  state = {
    sections: sections,
    showForm: false,
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }))
  }

  modifyObject = ({ key, val }) => {
    if (!(key in DEFAULT_OBJECT) || !Array.isArray(DEFAULT_OBJECT[key])) {
      DEFAULT_OBJECT[key] = val
    } else {
      DEFAULT_OBJECT[key] = [val, ...DEFAULT_OBJECT[key]]
    }

    this.setState(prevState => ({
      sections: Object.keys(DEFAULT_OBJECT).sort().map(key => ({
        key,
        title: key,
        data: convertToArray(key),
      })),
      showForm: !prevState.showForm,
    }))
  }

  render() {
    if (this.state.showForm) {
      return <ModifyObjectForm onSubmit={this.modifyObject} />
    } else {
      return (
        <View style={styles.container}>
          <Button
            title="Modify Object"
            onPress={this.toggleForm}
          />
          <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={this.state.sections}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    paddingLeft: 8,
    fontWeight: 'bold',
    backgroundColor: '#aaa',
  }
})
