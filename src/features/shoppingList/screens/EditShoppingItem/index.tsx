import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import s from './styles';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';

type RouteProps = RouteProp<
  CalendarStackParamList,
  CalendarScreenNames.EditShoppingItem
>;

const EditShoppingItem = () => {
  const route = useRoute<RouteProps>();
  const {day, itemId} = route.params;
  console.log(day, itemId);

  return (
    <View style={s.container}>
      <Text>Edit shopping item for {day.toDateString()}</Text>
    </View>
  );
};

export default EditShoppingItem;
