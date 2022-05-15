import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CalendarScreen,
  EditShoppingItemScreen,
} from 'src/features/shoppingList/screens';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';

const CalendarStackNavigator = createStackNavigator<CalendarStackParamList>();

export const CalendarNavigator = () => {
  return (
    <CalendarStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <CalendarStackNavigator.Screen
        name={CalendarScreenNames.CalendarList}
        component={CalendarScreen}
      />

      <CalendarStackNavigator.Screen
        name={CalendarScreenNames.EditShoppingItem}
        component={EditShoppingItemScreen}
      />
    </CalendarStackNavigator.Navigator>
  );
};
