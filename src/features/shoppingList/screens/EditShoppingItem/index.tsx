import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RouteProp, useRoute} from '@react-navigation/native';

import s from './styles';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';
import {NavigationHeaderLayout, CustomText, CustomInput} from 'src/components';

type RouteProps = RouteProp<
  CalendarStackParamList,
  CalendarScreenNames.EditShoppingItem
>;

const EditShoppingItem = () => {
  const {t} = useTranslation();
  const route = useRoute<RouteProps>();
  const [formName, setFormName] = useState('');
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

      <ScrollView showsVerticalScrollIndicator={false} style={s.form}>
        <View style={s.row}>
          <CustomInput
            value={formName}
            onChangeText={setFormName}
            label={t('shoppingList.name')}
          />
        </View>

        <CustomText>{t('shoppingList.category')}</CustomText>
        <CustomText>{t('shoppingList.date')}</CustomText>

        <View style={s.row}>
          <CustomInput
            label={t('shoppingList.quantity')}
            keyboardType={'numeric'}
          />
        </View>

        <CustomText>{t('shoppingList.unit')}</CustomText>

        <View style={s.row}>
          <CustomInput
            label={t('shoppingList.price')}
            keyboardType={'numeric'}
          />
        </View>

        <View style={s.row}>
          <CustomInput label={t('shoppingList.note')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditShoppingItem;
