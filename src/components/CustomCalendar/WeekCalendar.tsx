import React from 'react';
import {View} from 'react-native';

import WeekDay from './WeekDay';
import {CalendarDay} from './types';
import s from './styles';

type Props = {
  weekDays: CalendarDay[];
  onSelectDay: (date: Date) => void;
};

const WeekCalendar = ({weekDays, onSelectDay}: Props) => {
  return (
    <View style={s.weekCalendarContainer}>
      {weekDays.map(({date, isToday, isSelected, isCurrent}) => {
        const handleSelectDay = () => {
          onSelectDay(date);
        };

        return (
          <WeekDay
            key={date.getDate()}
            day={date.getDate()}
            isToday={isToday}
            isSelected={isSelected}
            isDisabled={!isCurrent}
            onSelectDay={handleSelectDay}
          />
        );
      })}
    </View>
  );
};

export default WeekCalendar;
