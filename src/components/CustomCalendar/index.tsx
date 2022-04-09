import React, {useState} from 'react';
import {View} from 'react-native';

import MonthCalendar from './MonthCalendar';
import WeekCalendar from './WeekCalendar';
import CalendarHeader from './CalendarHeader';
import s from './styles';
import WeekDayName from 'src/components/CustomCalendar/WeekDayName';

type Props = {
  firstDay: number;
  onSelectDay: (day: string) => void;
};

enum CalendarMode {
  Week = 'W',
  Month = 'M',
}

const CustomCalendar = ({onSelectDay, firstDay = 0}: Props) => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [mode, setMode] = useState<CalendarMode>(CalendarMode.Week);

  const headerTitle = getHeaderDate(selectedDay);

  const handleModeChange = () => {
    setMode(prev =>
      prev === CalendarMode.Week ? CalendarMode.Month : CalendarMode.Week,
    );
  };

  const handleToday = () => {
    setSelectedDay(new Date());
  };

  if (true) {
    const weekNames = getWeekDayNames(firstDay);
    const startOfCurrentWeek = getStartOfWeek(selectedDay, firstDay);
    const weekDays = getWeekDays(startOfCurrentWeek);

    // const prevWeekDays = getWeekDays(startOfPrevWeek);
    // const nextWeekDays = getWeekDays(startOfNextWeek);

    const handlePrevWeek = () => {
      const startOfPrevWeek = addDays(startOfCurrentWeek, -DAYS_IN_WEEK);
      setSelectedDay(startOfPrevWeek);
    };

    const handleNextWeek = () => {
      const startOfNextWeek = addDays(startOfCurrentWeek, DAYS_IN_WEEK);
      setSelectedDay(startOfNextWeek);
    };

    return (
      <View>
        <CalendarHeader
          title={headerTitle}
          mode={mode}
          onPrev={handlePrevWeek}
          onNext={handleNextWeek}
          onModeChange={handleModeChange}
          onToday={handleToday}
        />
        <View style={s.weekDayNamesContainer}>
          {weekNames.map(weekName => (
            <WeekDayName key={weekName} dayName={weekName} />
          ))}
        </View>
        <WeekCalendar weekDays={weekDays} />
      </View>
    );
  }

  return <MonthCalendar onSelectDay={onSelectDay} />;
};

const DAY_NAMES_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const MONTH_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const DAYS_IN_WEEK = 7;

const getWeekDayNames = (firstDay: number = 0) => {
  let dayNames = DAY_NAMES_SHORT;

  if (firstDay > 0 && firstDay < DAYS_IN_WEEK) {
    dayNames = dayNames.slice(firstDay).concat(dayNames.slice(0, firstDay));
  }

  return dayNames;
};

// const getWeeks = (current: Date, firstDay: number) => {
//   const startOfCurrentWeek = getStartOfWeek(current, firstDay);
//   const startOfPrevWeek = addDays(startOfCurrentWeek, -DAYS_IN_WEEK);
//   const startOfNextWeek = addDays(startOfCurrentWeek, DAYS_IN_WEEK);
//
//   const prevWeekDays = getWeekDays(startOfPrevWeek);
//   const currentWeekDays = getWeekDays(startOfCurrentWeek);
//   const nextWeekDays = getWeekDays(startOfNextWeek);
// };

const getHeaderDate = (current: Date): string => {
  const monthIndex = current.getMonth();
  const month = MONTH_NAMES[monthIndex];

  const year = current.getFullYear();

  return `${month} ${year}`;
};

const getWeekDays = (firstDay: Date): Date[] => {
  const weekDates: Date[] = [];

  for (let dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
    const day = addDays(firstDay, dayIndex);
    weekDates.push(day);
  }

  return weekDates;
};

const getStartOfWeek = (current: Date, firstDay: number = 0): Date => {
  const currentDay = current.getDay();

  let daysFromFirst = currentDay - firstDay;
  if (daysFromFirst < 0) {
    daysFromFirst += DAYS_IN_WEEK;
  }

  return addDays(current, -daysFromFirst);
};

const addDays = (current: Date, days: number): Date => {
  const finalDate = new Date(current);
  finalDate.setDate(current.getDate() + days);

  return finalDate;
};

export default CustomCalendar;
