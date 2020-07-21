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
        title="Go to Bank Holidays"
        onPress={() => navigation.navigate('BankHolidays')}
      />
    </View>
  );
};

export default HomeScreen;
