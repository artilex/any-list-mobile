import React, {useCallback, useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RouteProp, useRoute} from '@react-navigation/native';

import s from './styles';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';
import CustomInput from 'src/components/CustomInput';
import {NavigationHeaderLayout, CustomText} from 'src/components';

type RouteProps = RouteProp<
  CalendarStackParamList,
  CalendarScreenNames.EditShoppingItem
>;

const EditShoppingItem = () => {
  const {t} = useTranslation();
  const route = useRoute<RouteProps>();
  const {day, itemId} = route.params;
  const isNewItem = !itemId;
  const screenTitle = isNewItem
    ? t('screenNames.newItem')
    : t('screenNames.editItem');

  const handleSave = useCallback(() => {
    console.log('DONE DONE');
  }, []);

  const headerRight = useMemo(
    () => (
      <TouchableOpacity activeOpacity={0.8} onPress={handleSave}>
        <CustomText style={s.titleButtonText} title>
          {t('common.done')}
        </CustomText>
      </TouchableOpacity>
    ),
    [t, handleSave],
  );

  console.log(day, itemId);

  return (
    <View style={s.container}>
      <NavigationHeaderLayout right={headerRight} title={screenTitle} />
      <CustomInput />
    </View>
  );
};

export default EditShoppingItem;
