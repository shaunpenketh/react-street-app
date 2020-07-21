import React from 'react';
import {
  act,
  getAllByTestId,
  render,
  waitForElement,
  wait,
} from '@testing-library/react-native';
import BankHolidaysScreen from '../BankHolidays';
import bankHolidaysApis from 'api/bankHolidays';

test('it displays items to the screen after retrieval from api', async () => {
  const promise = Promise.resolve();
  const mockApi = jest
    .spyOn(bankHolidaysApis, 'getBankHolidays')
    .mockResolvedValue({
      data: {
        'england-and-wales': {
          division: 'england-and-wales',
          events: [
            {
              title: 'Christmas Day',
              date: '2021-12-27',
              notes: 'Substitute day',
              bunting: true,
            },
          ],
        },
        scotland: {
          division: 'scotland',
          events: [
            {
              title: 'St Andrew’s Day',
              date: '2021-11-30',
              notes: '',
              bunting: true,
            },
          ],
        },
        'northern-ireland': {
          division: 'northern-ireland',
          events: [
            {
              title: 'Boxing Day',
              date: '2021-12-28',
              notes: 'Substitute day',
              bunting: true,
            },
          ],
        },
      },
    });

  const {getAllByTestId} = render(<BankHolidaysScreen />);

  expect(mockApi).toHaveBeenCalled();

  await act(() => promise);

  await waitForElement(() => getAllByTestId('bankHolidayName'));
  await waitForElement(() => getAllByTestId('bankHolidayDate'));
});

test('it displays an error should api call fail', async () => {
  const promise = Promise.resolve();
  const errorMessage = 'Error Message';
  const mockApi = jest
    .spyOn(bankHolidaysApis, 'getBankHolidays')
    .mockRejectedValue({
      message: errorMessage,
    });

  const {getByTestId} = render(<BankHolidaysScreen />);

  expect(mockApi).toHaveBeenCalled();

  await act(() => promise);

  await waitForElement(() => getByTestId('bankHolidaysApiError'));
  await wait(() => {
    expect(getByTestId('bankHolidaysApiError').props.children).toEqual(
      errorMessage,
    );
  });
});
