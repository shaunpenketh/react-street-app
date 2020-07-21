import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = {
  main: {height: '100%', width: '100%'},
};

const MapScreen = ({navigation}) => {
  const {main} = styles;
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    (async () => {
      Geolocation.getCurrentPosition((info) =>
        setLocation({
          latitude: info.latitude,
          longitude: info.longitude,
        }),
      );
    })();
  }, []);

  return (
    <MapView
      style={main}
      showsUserLocation
      initialRegion={{
        latitude: -6.270565,
        longitude: 106.75955,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    />
  );
};

export default MapScreen;
