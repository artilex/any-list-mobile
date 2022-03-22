import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CalendarScreen, SettingsScreen} from 'src/features/ShoppingList/screens';

const ShoppingTabNavigator = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShoppingTabNavigator.Navigator>
        <ShoppingTabNavigator.Screen
          name={'CalendarScreen'}
          component={CalendarScreen}
        />
        <ShoppingTabNavigator.Screen
          name={'SettingsScree'}
          component={SettingsScreen}
        />
      </ShoppingTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
