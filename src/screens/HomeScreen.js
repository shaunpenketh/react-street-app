import * as React from 'react';
import {Button, View, Text} from 'react-native';

const styles = {
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

const HomeScreen = ({navigation}) => {
  const {main} = styles;

  return (
    <View style={main}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
