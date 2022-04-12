import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import s from './styles';
import PlusIcon from 'src/assets/images/circle-plus.svg';
import {CustomCalendar} from 'src/components';
import {BORDER, COLORS, ICON_SIZES, PADDINGS} from 'src/constants/theme';

const Calendar = () => {
  const {t} = useTranslation();

  // TODO: Fix SafeArea for ios (Header and BottomTab)
  // TODO: Add App Icon
  // TODO: Replace TochableOpacity to CustomComponent with bottom clicable border or shadow
  return (
    <View style={s.container}>
      <CustomCalendar
        onSelectDay={day => console.log('SHOW DATA FOR THIS DAY: ' + day)}
        firstDay={1}
      />
      <View
        style={{
          flex: 1,
          borderTopColor: COLORS.grayPrimary,
          borderTopWidth: BORDER.width,
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={() => (
            <View style={{padding: PADDINGS.regular}}>
              <Text>Hello there</Text>
            </View>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: 'absolute',
            right: PADDINGS.regular,
            bottom: PADDINGS.regular,
          }}
          onPress={() => console.log('Hola')}>
          <PlusIcon width={ICON_SIZES.large} height={ICON_SIZES.large} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calendar;
