import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import bankHolidaysApi from '../api/bankHolidays';
import filters from '../utils/filters';
import sorting from '../utils/sorting';
import merging from '../utils/merging';

const styles = {
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
};

const BankHolidaysScreen = () => {
  const {main} = styles;
  const [bankHolidays, setBankHolidays] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const {filterAfterToday} = filters;
    const {sortByDate} = sorting;
    const {mergeArrays} = merging;

    (async () => {
      try {
        // Retrieve data from api
        const {data} = await bankHolidaysApi.getBankHolidays();

        // Split in to england / scotland / ireland
        const {
          'england-and-wales': englandAndWales,
          scotland,
          'northern-ireland': ireland,
        } = data;

        console.log(englandAndWales);

        // filter after today's date
        const englandAndWalesFiltered = filterAfterToday(
          englandAndWales.events,
        );
        const scotlandFiltered = filterAfterToday(scotland.events);
        const irelandFiltered = filterAfterToday(ireland.events);

        // merge all results
        const ukBankHolidays = mergeArrays(
          englandAndWalesFiltered,
          scotlandFiltered,
          irelandFiltered,
        );

        // sort results
        const sortedUKBankHolidays = sortByDate(ukBankHolidays, 'asc');

        // slice 5 results
        const nextFiveBankHolidays = sortedUKBankHolidays.slice(0, 5);

        // set state to equal the next 5 holidays
        setBankHolidays(nextFiveBankHolidays);
      } catch (err) {
        setError(err.message);
      }
    })();

    return () => setError(undefined);
  }, []);

  return (
    <View style={main}>
      {error && <Text>{error}</Text>}
      <Text>Bank Holidays</Text>
      {bankHolidays.map((item, index) => (
        <View key={`key-${item.title}-${index}`}>
          <Text>{item.title}</Text>
          <Text>{item.date}</Text>
        </View>
      ))}
    </View>
  );
};

export default BankHolidaysScreen;
