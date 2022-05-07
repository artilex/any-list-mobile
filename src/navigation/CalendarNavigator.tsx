import {createStackNavigator} from '@react-navigation/stack';
import {
  CalendarScreen,
  EditShoppingItemScreen,
} from 'src/features/shoppingList/screens';
import {
  CalendarScreenNames,
  ShoppingListScreenNames,
} from 'src/navigation/types';
import React from 'react';

const CalendarStackNavigator = createStackNavigator();

export const CalendarNavigator = () => {
  return (
    <CalendarStackNavigator.Navigator>
      <CalendarStackNavigator.Screen
        name={CalendarScreenNames.CalendarList}
        component={CalendarScreen}
        options={{headerShown: false}}
      />

      <CalendarStackNavigator.Screen
        name={CalendarScreenNames.EditShoppingItem}
        component={EditShoppingItemScreen}
      />
    </CalendarStackNavigator.Navigator>
  );
};
