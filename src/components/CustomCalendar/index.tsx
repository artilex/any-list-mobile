import React, {useState} from 'react';
import {View} from 'react-native';

import CalendarHeader from './CalendarHeader';
import WeekDayName from './WeekDayName';
import WeekCalendar from './WeekCalendar';
import MonthCalendar from './MonthCalendar';
import {DAYS_IN_WEEK} from 'src/constants/date';
import {CalendarMode} from './types';
import s from './styles';
import {
  addDays,
  getHeaderDate,
  getMonthWeeks,
  getStartOfWeek,
  getWeekDayNames,
  getWeekDays,
  onlyDate,
  sameDays,
} from './utils';

type Props = {
  firstDay: number;
  monthNames: string[];
  weekDayNames: string[];
  selectedDay: Date;
  onSelectDay: (day: Date) => void;
};

const CustomCalendar = React.memo(
  ({
    firstDay = 0,
    monthNames,
    weekDayNames,
    selectedDay,
    onSelectDay,
  }: Props) => {
    const [mode, setMode] = useState<CalendarMode>(CalendarMode.Week);

    const headerTitle = getHeaderDate(selectedDay, monthNames);
    const weekNames = getWeekDayNames(weekDayNames, firstDay);
    const weekDays = getWeekDays(selectedDay, firstDay);
    const weeks = getMonthWeeks(selectedDay, firstDay);

    const handleModeChange = () => {
      setMode(prev =>
        prev === CalendarMode.Week ? CalendarMode.Month : CalendarMode.Week,
      );
    };

    const handleToday = () => {
      onSelectDay(new Date());
    };

    const handlePrev = () => {
      let nextDay;

      if (mode === CalendarMode.Week) {
        const prevWeekDay = addDays(selectedDay, -DAYS_IN_WEEK);
        nextDay = getStartOfWeek(prevWeekDay, firstDay);
      } else {
        nextDay = onlyDate(
          selectedDay.getFullYear(),
          selectedDay.getMonth() - 1,
          1,
        );
      }

      onSelectDay(nextDay);
    };

    const handleNext = () => {
      let nextDay;

      if (mode === CalendarMode.Week) {
        const nextWeekDay = addDays(selectedDay, DAYS_IN_WEEK);
        nextDay = getStartOfWeek(nextWeekDay, firstDay);
      } else {
        nextDay = onlyDate(
          selectedDay.getFullYear(),
          selectedDay.getMonth() + 1,
          1,
        );
      }

      onSelectDay(nextDay);
    };

    const handleSelectDay = (day: Date) => {
      onSelectDay(day);
      onSelectDay(day);
    };

    const renderCalendar = () =>
      mode === CalendarMode.Week ? (
        <WeekCalendar weekDays={weekDays} onSelectDay={handleSelectDay} />
      ) : (
        <MonthCalendar weeks={weeks} onSelectDay={handleSelectDay} />
      );

    return (
      <View style={s.container}>
        <CalendarHeader
          title={headerTitle}
          mode={mode}
          todayDisabled={sameDays(new Date(), selectedDay)}
          onPrev={handlePrev}
          onNext={handleNext}
          onModeChange={handleModeChange}
          onToday={handleToday}
        />
        <View style={s.weekDayNamesContainer}>
          {weekNames.map(weekName => (
            <WeekDayName key={weekName} dayName={weekName} />
          ))}
        </View>
        {renderCalendar()}
      </View>
    );
  },
);

export default CustomCalendar;
