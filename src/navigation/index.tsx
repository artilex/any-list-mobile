import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingListCalendar, ShoppingListSettings} from '../screens';

const ShoppingTabNavigator = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <ShoppingTabNavigator.Navigator>
        <ShoppingTabNavigator.Screen
          name={'ShoppingListCalendar'}
          component={ShoppingListCalendar}
        />
        <ShoppingTabNavigator.Screen
          name={'ShoppingListSettings'}
          component={ShoppingListSettings}
        />
      </ShoppingTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
