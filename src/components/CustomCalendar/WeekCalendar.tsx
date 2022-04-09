import React from 'react';
import {View} from 'react-native';

import WeekDay from './WeekDay';
import s from './styles';

type Props = {
  weekDays: Date[];
};

const WeekCalendar = ({weekDays}: Props) => {
  return (
    <View style={s.weekCalendarContainer}>
      {weekDays.map(weekDate => (
        <WeekDay key={weekDate.getDate()} day={weekDate.getDate()} />
      ))}
    </View>
  );
};

export default WeekCalendar;
