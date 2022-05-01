import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import s from './styles';
import PlusIcon from 'src/assets/images/circle-plus.svg';
import {CustomCalendar} from 'src/components';
import {ICON_SIZES, PADDINGS} from 'src/constants/theme';

const START_FROM_MONDAY = 1;

const Calendar = () => {
  const {t} = useTranslation();

  const weekDayNamesShort = [
    t('calendar.day.su'),
    t('calendar.day.mo'),
    t('calendar.day.tu'),
    t('calendar.day.we'),
    t('calendar.day.th'),
    t('calendar.day.fr'),
    t('calendar.day.sa'),
  ];

  const monthNames = [
    t('calendar.month.january'),
    t('calendar.month.february'),
    t('calendar.month.march'),
    t('calendar.month.april'),
    t('calendar.month.may'),
    t('calendar.month.june'),
    t('calendar.month.july'),
    t('calendar.month.august'),
    t('calendar.month.september'),
    t('calendar.month.october'),
    t('calendar.month.november'),
    t('calendar.month.december'),
  ];

  return (
    <View style={s.container}>
      <CustomCalendar
        firstDay={START_FROM_MONDAY}
        weekDayNames={weekDayNamesShort}
        monthNames={monthNames}
        onSelectDay={day => console.log('SHOW DATA FOR THIS DAY: ' + day)}
      />

      <View style={s.body}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={() => (
            <View style={{padding: PADDINGS.regular}}>
              <Text>Hello there</Text>
            </View>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={s.addButton}
          onPress={() => console.log('Hola')}>
          <PlusIcon width={ICON_SIZES.large} height={ICON_SIZES.large} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calendar;
