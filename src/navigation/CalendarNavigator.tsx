import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import {
  CalendarScreen,
  EditShoppingItemScreen,
} from 'src/features/shoppingList/screens';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';
import {innerStackScreenOptions} from 'src/navigation/utils';

const CalendarStackNavigator = createStackNavigator<CalendarStackParamList>();

export const CalendarNavigator = () => {
  const {t} = useTranslation();

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
        options={({route}) =>
          innerStackScreenOptions(
            route.params.title,
            t('common.done'),
            route.params.handleSave,
          )
        }
      />
    </CalendarStackNavigator.Navigator>
  );
};
