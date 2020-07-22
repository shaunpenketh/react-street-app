import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import MapViewDirections from 'react-native-maps-directions';
import colors from 'utils/colors';

const styles = {
  map: {flex: 1},
};

const MapScreen = () => {
  const {map} = styles;
  const mapView = useRef(null);
  const manchesterArenaCoordinates = {
    latitude: 53.4880988,
    longitude: -2.2458508,
  };

  const onMapReady = () => {
    mapView.current.fitToElements(true);
  };

  const [currentLocation, setCurrentLocation] = useState(null);

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
    <MapView style={map} ref={mapView} onMapReady={onMapReady}>
      {currentLocation && (
        <>
          <Marker coordinate={currentLocation} pinColor={'green'} />
          <Marker coordinate={manchesterArenaCoordinates} />
          <MapViewDirections
            origin={currentLocation}
            destination={manchesterArenaCoordinates}
            apikey={Config.GOOGLE_MAPS_API_KEY}
            strokeWidth={4}
            strokeColor={colors.darkGrey}
          />
        </>
      )}
    </MapView>
  );
};

export default MapScreen;
