import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, Button, ScrollView, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Camera } from 'expo-camera';

export default function App() {
  const [chosenImage, setChosenImage] = useState(null);
  const [takenImage, setTakenImage] = useState(null);
  const [customCameraReady, setCustomCameraReady] = useState(false)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

  _launchCameraRollAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // let { status } = await ImagePicker.requestCameraPermissionsAsync()

    if (status !== 'granted') {
      console.error('Camera roll permissions not granted');
      return;
    }

    let img = await ImagePicker.launchImageLibraryAsync();

    setChosenImage(img);
  };

  _launchCameraAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status !== 'granted') {
      console.error('Camera permissions not granted');
      return;
    }

    let img = await ImagePicker.launchCameraAsync({ allowsEditing: true });

    let flippedImage = await ImageManipulator.manipulateAsync(img.uri, [{ flip: ImageManipulator.FlipType.Horizontal }])

    setTakenImage(flippedImage);
  };

  _launchCustomCameraAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA)

    if (status !== 'granted') {
      console.error('Camera permissions not granted')
      return
    }

    setCustomCameraReady(true)
  }

  _flipCamera = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front)
    } else {
      setCameraType(Camera.Constants.Type.back)
    }
  }

  useEffect(() => { _launchCustomCameraAsync() }, [])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>Photos</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('./assets/mabel.jpg')}
          style={{ height: 200, width: 200 }}
        />
        <Image
          source={require('./assets/toby.jpg')}
          style={{ height: 200, width: 200 }}
        />
      </View>
      <Button
        title="Launch Camera Roll"
        onPress={() => {
          _launchCameraRollAsync();
        }}
      />
      <Button
        title="Launch Camera"
        onPress={() => {
          _launchCameraAsync();
        }}
      />
      {customCameraReady && (
        <TouchableHighlight
          onPress={() => { _flipCamera() }}
        >
          <Camera
            style={styles.camera}
            type={cameraType}
          />
        </TouchableHighlight>
      )}
      <View style={styles.image}>
        {chosenImage && (
          <Image
            source={{ uri: chosenImage.uri }}
            style={{ height: 200, width: 200 }}
          />
        )}
        {takenImage && (
          <Image
            source={{ uri: takenImage.uri }}
            style={{ height: 200, width: 200 }}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 400,
    height: 400,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
