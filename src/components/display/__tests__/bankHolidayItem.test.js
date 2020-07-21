import React from 'react';
import {render} from '@testing-library/react-native';
import BankHolidayItem from '../bankHolidayItem';

test('the components renders passed props to screen', () => {
  const name = 'Hello!';
  const date = '2020-15-01';

  const {getByTestId} = render(<BankHolidayItem name={name} date={date} />);

  const nameItem = getByTestId('bankHolidayName');
  const dateItem = getByTestId('bankHolidayDate');

  expect(nameItem).toBeTruthy();
  expect(dateItem).toBeTruthy();

  expect(nameItem.props.children).toBe(name);
  expect(dateItem.props.children).toBe(date);
});
