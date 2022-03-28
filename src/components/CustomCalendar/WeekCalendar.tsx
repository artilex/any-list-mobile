import React, {useMemo} from 'react';

import {Text, View} from 'react-native';
import {getWeekDates, weekDayNames} from 'react-native-calendars/src/dateutils';
import {
  COLORS,
  FONT_COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  PADDINGS,
} from 'src/constants/theme';

type Props = {
  current: string;
};

const getWeekDays = (current: string, firstDay: number) => {
  const dayNames = weekDayNames(firstDay);
  const weekDates = getWeekDates(current, firstDay);
  const weekDays = [];

  if (weekDates) {
    for (let i = 0; i < dayNames.length; i++) {
      weekDays.push({
        name: dayNames[i],
        value: new Date(weekDates[i]).getDate(),
      });
    }
  }

  return weekDays;
};

const WeekCalendar = ({current}: Props) => {
  const weekDays = getWeekDays(current, 1);

  // const weekDays = dayNames.map((name: string, index: number) => {
  //   let value1 = '0';
  //
  //   if (weekDates && weekDates[index]) {
  //     const date = moment(weekDates[index]);
  //     value1 = date.format('DD');
  //     console.log('index');
  //     console.log(index);
  //     console.log(weekDates[index]);
  //   }
  //
  //   return {
  //     name,
  //     value: moment(weekDates![index]).format('DD'),
  //   };
  // });

  console.log('weekDays');
  console.log(weekDays);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {weekDays.map(day => {
        return (
          <View
            key={day.name}
            style={{
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: FONT_FAMILY.extraBold,
                fontSize: FONT_SIZES.regular,
                color: COLORS.graySecondary,
              }}>
              {day.name}
            </Text>
            <Text
              style={{
                lineHeight: FONT_SIZES.regular * 2,
                color: FONT_COLORS.primary,
                fontSize: FONT_SIZES.regular,
                fontFamily: FONT_FAMILY.extraBold,
              }}>
              {day.value}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default WeekCalendar;
