import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import bankHolidaysApi from '../api/bankHolidays';

const styles = {
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

const BankHolidaysScreen = () => {
  const {main} = styles;
  const [bankHolidays, setBankHolidays] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await bankHolidaysApi.getBankHolidays();
      } catch (err) {
        setError(err.message);
      }
    })();
  });

  return (
    <View style={main}>
      {error && <Text>{error}</Text>}
      <Text>Bank Holidays</Text>
    </View>
  );
};

export default BankHolidaysScreen;
