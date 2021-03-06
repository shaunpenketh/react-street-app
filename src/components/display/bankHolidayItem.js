import React from 'react';
import PropTypes from 'prop-types';
import {CardItem, Body, Text} from 'native-base';
import colors from '../../utils/colors';

const styles = {
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 8,
    borderRadius: 3,
    backgroundColor: colors.teal,
  },
  nameStyle: {fontWeight: 'bold', fontSize: 20, margin: 2, color: colors.white},
  dateStyle: {marginVertical: 6, color: colors.white},
};

const BankHolidayItem = ({name, date}) => {
  const {container, nameStyle, dateStyle} = styles;
  return (
    <CardItem style={container}>
      <Body>
        <Text style={nameStyle} testID={'bankHolidayName'}>
          {name}
        </Text>
        <Text style={dateStyle} testID={'bankHolidayDate'}>
          {date}
        </Text>
      </Body>
    </CardItem>
  );
};

BankHolidayItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BankHolidayItem;
