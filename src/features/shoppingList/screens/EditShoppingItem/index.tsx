import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import s from './styles';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';
import CustomInput from 'src/components/CustomInput';

type NavigationProps = NavigationProp<
  CalendarStackParamList,
  CalendarScreenNames.EditShoppingItem
>;

type RouteProps = RouteProp<
  CalendarStackParamList,
  CalendarScreenNames.EditShoppingItem
>;

const EditShoppingItem = () => {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();
  const {day, itemId} = route.params;

  const handleSave = useCallback(() => {
    console.log('DONE DONE');
  }, []);

  useEffect(() => {
    navigation.setParams({handleSave});
  }, [navigation, handleSave]);

  console.log(day, itemId);

  return (
    <View style={s.container}>
      <Text>Edit shopping item for {day.toDateString()}</Text>
    </View>
  );
};

export default EditShoppingItem;
