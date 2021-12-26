import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Button } from 'react-native';
import Constants from 'expo-constants';

import { Audio, Video } from 'expo-av';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [shouldPlay, setShouldPlay] = useState(false)

  _setAudioModeAsync = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
    });
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      CooperBlackRegular: require("./assets/CooperBlackRegular.ttf")
    })
  }

  _loadAssetsAsync = async () => {
    await Asset.loadAsync([
      require("./assets/1.mp4"),
      require("./assets/2.mp4"),
      require("./assets/3.mp4"),
      require("./assets/4.mp4"),
      require("./assets/5.mp4"),
      require("./assets/6.mp4"),
      require("./assets/7.mp4"),
      require("./assets/8.mp4"),
      require("./assets/9.mp4"),
    ])
  }

  _setupAsync = async () => {
    await Promise.all([
      _setAudioModeAsync(),
      _loadFontsAsync(),
      _loadAssetsAsync(),
    ])
    setIsReady(true)
  }

  useEffect(() => {
    _setupAsync()
  }, []);

  let size = 100;

  if (!isReady) {
    return (
      <AppLoading />
    )
  } else {
    return (
      <View style={styles.container}>
        <Button
          title="Play all"
          color="yellow"
          onPress={() => {
            setShouldPlay(true)
          }}
        />
        <Text style={styles.text}>Cat sounds</Text>
        <View style={{
          flexDirection: 'row',
        }}
        >
          <CatVideoButton source={require('./assets/1.mp4')} size={size} />
          <CatVideoButton source={require('./assets/2.mp4')} size={size} />
          <CatVideoButton source={require('./assets/3.mp4')} size={size} />
        </View>
        <View style={{
          flexDirection: 'row',
        }}
        >
          <CatVideoButton source={require('./assets/4.mp4')} size={size} />
          <CatVideoButton source={require('./assets/5.mp4')} size={size} />
          <CatVideoButton source={require('./assets/6.mp4')} size={size} />
        </View>
        <View style={{
          flexDirection: 'row',
        }}
        >
          <CatVideoButton source={require('./assets/7.mp4')} size={size} />
          <CatVideoButton source={require('./assets/8.mp4')} size={size} />
          <CatVideoButton source={require('./assets/9.mp4')} size={size} />
        </View>
      </View>
    );
  }
}

class CatVideoButton extends React.Component {

  resetAsync = async () => {
    await this._video.stopAsync();
    await this._video.setPositionAsync(0);
  };

  playAsync = async () => {
    await this._video.replayAsync()
  }

  render() {
    return (
      <View style={{
        margin: 10,
      }}
      >
        <TouchableHighlight onPress={() => { this.playAsync() }}>
          <View>
            <Video
              source={this.props.source}
              style={{
                width: this.props.width || this.props.size || 400,
                height: this.props.height || this.props.size || 400,
              }}
              resizeMode="cover"
              shouldPlay
              ref={(c) => {
                this._video = c;
              }}
              onPlaybackStatusUpdate={(status) => {
                if (status.didJustFinish) {
                  this.resetAsync()
                }
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'teal',
  },
  text: {
    color: 'pink',
    fontSize: 48,
    fontFamily: "CooperBlackRegular",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
