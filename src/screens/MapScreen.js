import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = {
  main: {height: '100%', width: '100%'},
};

const MapScreen = ({navigation}) => {
  const {main} = styles;

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    (async () => {
      Geolocation.getCurrentPosition((info) =>
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }),
      );
    })();
  }, []);

  return <MapView style={main} showsUserLocation maxZoomLevel={20} />;
};

export default MapScreen;
