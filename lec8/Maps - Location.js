import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default function App() {

  const [location, setLocation] = useState(null)
  const [places, setPlaces] = useState(null)
  const [where, setWhere] = useState(null)

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // let { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      console.log('Location permission not granted!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    let peopleSecurityUniversity = (await Location.geocodeAsync("47 Xa lộ Hà Nội, Phường Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam"))[0]
    let hoChiMinhUniversityOfTechnology = (await Location.geocodeAsync("268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Vietnam"))[0]
    let universityOfScience = (await Location.geocodeAsync("227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Vietnam"))[0]

    let where = (await Location.reverseGeocodeAsync(location.coords))[0]
    console.log(where)

    setLocation(location)
    setPlaces({
      peopleSecurityUniversity,
      hoChiMinhUniversityOfTechnology,
      universityOfScience,
    })
    setWhere(where)
  };

  useEffect(() => { _getLocationAsync() }, []);

  if (!(location && where)) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View >
    )
  } else {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922 * 5,
            longitudeDelta: 0.0421 * 5,
          }}
        >
          <MapView.Marker
            coordinate={location.coords}
            title="You are here"
            description={where.name}
          />
          <MapView.Marker
            coordinate={places.peopleSecurityUniversity}
            title="University of People's Security"
            description="University"
            pinColor="teal"
          />
          <MapView.Marker
            coordinate={places.hoChiMinhUniversityOfTechnology}
            title="Ho Chi Minh City University of Technology"
            description="University"
            pinColor="blue"
          />
          <MapView.Marker
            coordinate={places.universityOfScience}
            title="University of Science"
            description="University"
            pinColor="purple"
          />
        </MapView>
      </View >
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
