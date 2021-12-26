import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Magnetometer, DeviceMotion } from 'expo-sensors';

export default function App() {

  const [v, setV] = useState(null)
  const [theta, setTheta] = useState("0rad")
  const [dm, setDm] = useState(null)
  const [angle, setAngle] = useState("0rad")

  calculateTheta = () => {
    if (v) {
      let { x, y, z } = v
      setTheta(Math.atan(-x / y))
      if (-x > 0 && y > 0) {
        //
      }
      else if (y > 0) {
        setTheta(prevTheta => prevTheta + Math.PI)
      }
      else {
        setTheta(prevTheta => prevTheta + Math.PI * 2)
      }
    }
  }

  _setupMagnetometerAsync = async () => {
    Magnetometer.addListener((v) => {
      setV(v)
      calculateTheta()
    })
  }

  calculateAngle = () => {
    if (dm && dm.rotation) {
      setAngle(dm.rotation.gamma)
    }
  }

  _setupDeviceMotionAsync = async () => {
    DeviceMotion.addListener((dm) => {
      setDm(dm)
      calculateAngle()
    })
    DeviceMotion.setUpdateInterval(16)
  }

  // useEffect(() => { _setupMagnetometerAsync() }, [])
  useEffect(() => {
    _setupDeviceMotionAsync()
    return () => { DeviceMotion.removeAllListeners() }
  }, [])

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(theta)}</Text>
      <ImageBackground
        source={require('./CompassFace.png')}
        style={{
          height: 320,
          width: 320,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('./CompassNeedle.png')}
          style={{
            height: 420,
            width: 420,
            opacity: 0.9,
            transform: [{ rotate: theta }],
          }}
        />
      </ImageBackground> */}

      <Image
        source={require('./UpHouse.jpg')}
        style={{
          height: 1334 * 0.7,
          width: 750 * 0.7,
          transform: [{ rotate: angle }],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
