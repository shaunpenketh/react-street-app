import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';

const styles = {
  main: {flex: 1},
};

const MapScreen = ({navigation}) => {
  const {main} = styles;
  const mapView = useRef(null);
  const manchesterArenaCoordinates = {
    latitude: 53.4880988,
    longitude: -2.2458508,
  };

  const onMapReady = () => {
    mapView.current.fitToElements(true);
  };

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    (async () => {
      Geolocation.getCurrentPosition((info) =>
        setCurrentLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }),
      );
    })();
  }, []);

  return (
    <MapView style={main} ref={mapView} onMapReady={onMapReady}>
      <Marker coordinate={currentLocation} pinColor={'green'} />
      <Marker coordinate={manchesterArenaCoordinates} />
    </MapView>
  );
};

export default MapScreen;
