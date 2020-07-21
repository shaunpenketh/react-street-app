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
        const bankHolidaysFromApi = bankHolidaysApi.getBankHolidays();
        console.log(bankHolidaysFromApi);
      } catch (err) {
        setError(err.message);
      }
    })();
  });

  return (
    <View style={main}>
      <Text>Bank Holidays</Text>
    </View>
  );
};

export default BankHolidaysScreen;
