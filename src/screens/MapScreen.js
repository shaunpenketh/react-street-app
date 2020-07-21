import React from 'react';
import {View, Text} from 'react-native';

const styles = {
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

const MapScreen = ({navigation}) => {
  const {main} = styles;

  return (
    <View style={main}>
      <Text>Map Screen</Text>
    </View>
  );
};

export default MapScreen;
