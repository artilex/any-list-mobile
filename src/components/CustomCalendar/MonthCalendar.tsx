import React from 'react';
import {View} from 'react-native';

import WeekCalendar from './WeekCalendar';
import {CalendarDay} from './types';

type Props = {
  weeks: CalendarDay[][];
  onSelectDay: (date: Date) => void;
};

const MonthCalendar = ({weeks, onSelectDay}: Props) => {
  return (
    <View>
      {weeks.map(weekDays => (
        <WeekCalendar
          key={weekDays[0].date.getTime()}
          weekDays={weekDays}
          onSelectDay={onSelectDay}
        />
      ))}
    </View>
  );
};

export default MonthCalendar;
