import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  CalendarScreen,
  EditShoppingItemScreen,
  SettingsScreen,
} from 'src/features/shoppingList/screens';
import {
  ShoppingListScreenNames,
  ShoppingListTabParamList,
} from 'src/navigation/types';
import {tabScreenOptions} from './utils';
import {CalendarNavigator} from 'src/navigation/CalendarNavigator';

const ShoppingTabNavigator =
  createBottomTabNavigator<ShoppingListTabParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShoppingTabNavigator.Navigator screenOptions={tabScreenOptions}>
        <ShoppingTabNavigator.Screen
          name={ShoppingListScreenNames.Calendar}
          component={CalendarNavigator}
        />
        <ShoppingTabNavigator.Screen
          name={ShoppingListScreenNames.Settings}
          component={SettingsScreen}
        />
      </ShoppingTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
