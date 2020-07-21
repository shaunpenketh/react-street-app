import React from 'react';
import {Button, View, Text} from 'react-native';
import NavigationButton from 'components/inputs/navigationButton';
import colors from '../utils/colors';

const styles = {
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: colors.darkGrey,
  },
  buttonStyle: {
    marginVertical: 15,
  },
};

const HomeScreen = ({navigation}) => {
  const {main, buttonStyle} = styles;

  return (
    <View style={main}>
      <NavigationButton
        label="Go to Bank Holidays"
        onPress={() => navigation.navigate('BankHolidays')}
        buttonStyleExt={buttonStyle}
      />
      <NavigationButton
        label="Go to Map Screen"
        onPress={() => navigation.navigate('MapScreen')}
        buttonStyleExt={buttonStyle}
      />
    </View>
  );
};

export default HomeScreen;
