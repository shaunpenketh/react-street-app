import React from 'react';

import {render} from '@testing-library/react-native';
import NavigationButton from '../NavigationButton';

test('it renders item to the screen with correct label', async () => {
  const mockFn = jest.fn();
  const label = 'Test Label';
  const {getByTestId} = render(
    <NavigationButton onPress={mockFn} label={label} />,
  );

  const buttonItem = getByTestId('navigationButton');
  const labelItem = getByTestId('navigationButtonText');

  expect(buttonItem).toBeTruthy();
  expect(labelItem).toBeTruthy();

  expect(labelItem.props.children).toBe(label);
});
