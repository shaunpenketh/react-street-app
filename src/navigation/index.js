import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';
import BankHolidays from 'screens/BankHolidays';
import MapScreen from 'screens/MapScreen';
import colors from 'utils/colors';

const Stack = createStackNavigator();
const headerStyle = {
  backgroundColor: colors.teal,
};
const headerTitleStyle = {
  color: colors.white,
};
const headerTintColor = colors.white;

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTintColor,
      }}>
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
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{title: 'Route To Arena'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
