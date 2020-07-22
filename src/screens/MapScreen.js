import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

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

  useEffect(() => {
    if (mapView === null) {
      return;
    }
    mapView.current.fitToElements(true);
  }, [mapView]);

  return (
    <MapView
      style={main}
      initialRegion={region}
      onRegionChangeComplete={(region) => setRegion(region)}
      ref={mapView}>
      <Marker coordinate={currentLocation} pinColor={'green'} />
      <Marker coordinate={manchesterArenaCoordinates} />
    </MapView>
  );
};

export default MapScreen;
