import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  CalendarScreen,
  SettingsScreen,
} from 'src/features/ShoppingList/screens';
import {
  ShoppingListScreenNames,
  ShoppingListTabParamList,
} from 'src/navigation/types';
import {renderTabIcons} from './utils';
import {Text, View} from 'react-native';

const ShoppingTabNavigator =
  createBottomTabNavigator<ShoppingListTabParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShoppingTabNavigator.Navigator
        // tabBar={props => (
        //   <View style={}>
        //     <Text>Hey</Text>
        //   </View>
        // )}
        screenOptions={renderTabIcons}>
        <ShoppingTabNavigator.Screen
          name={ShoppingListScreenNames.Calendar}
          component={CalendarScreen}
          options={{}}
        />
        <ShoppingTabNavigator.Screen
          name={ShoppingListScreenNames.Settings}
          component={SettingsScreen}
          options={{}}
        />
      </ShoppingTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
