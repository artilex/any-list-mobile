import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const ShoppingTabNavigator = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <ShoppingTabNavigator.Screen name={'ShoppingCalendar'} component={null} />
    </NavigationContainer>
  );
};

export default Navigator;
