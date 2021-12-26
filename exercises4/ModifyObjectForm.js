import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

export const ModifyObjectForm = (props) => {

  const [key, setKey] = useState('')
  const [val, setVal] = useState('')

  const handleKeyUpdate = key => {
    setKey(key)
  }

  const handleValUpdate = val => {
    setVal(val)
  }

  const handleSubmit = () => {
    props.onSubmit({ key, val })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Key"
        onChangeText={handleKeyUpdate}
        value={key}
      />
      <TextInput
        style={styles.input}
        placeholder="Val"
        onChangeText={handleValUpdate}
        value={val}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})