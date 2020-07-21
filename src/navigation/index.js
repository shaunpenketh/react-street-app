import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BankHolidays from '../screens/BankHolidays';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="BankHolidays"
        component={BankHolidays}
        options={{title: 'UK Bank Holidays'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
