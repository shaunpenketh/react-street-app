import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const styles = {
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

const BankHolidaysScreen = () => {
  const {main} = styles;

  useEffect(() => {});

  return (
    <View style={main}>
      <Text>Bank Holidays</Text>
    </View>
  );
};

export default BankHolidaysScreen;
