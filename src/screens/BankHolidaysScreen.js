import React, {useEffect, useState} from 'react';

import {View, Text} from 'react-native';
import bankHolidaysApi from 'api/bankHolidays';
import filters from 'utils/filters';
import sorting from 'utils/sorting';
import merging from 'utils/merging';
import BankHolidayItem from 'components/display/bankHolidayItem';
import colors from '../utils/colors';

const styles = {
  main: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.darkGrey,
  },
};

const BankHolidaysScreen = () => {
  const {main} = styles;
  const [bankHolidays, setBankHolidays] = useState(undefined);
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
      {error && <Text testID={'bankHolidaysApiError'}>{error}</Text>}
      {bankHolidays &&
        bankHolidays.map((item, index) => (
          <BankHolidayItem name={item.title} date={item.date} key={index} />
        ))}
    </View>
  );
};

export default BankHolidaysScreen;
