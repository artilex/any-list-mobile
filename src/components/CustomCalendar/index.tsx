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
  getWeekDayNames,
  getWeekDays,
  onlyDate,
} from './utils';

type Props = {
  firstDay: number;
  onSelectDay: (day: string) => void;
};

// TODO: Add onSelectDay to Handler
const CustomCalendar = ({onSelectDay, firstDay = 0}: Props) => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [mode, setMode] = useState<CalendarMode>(CalendarMode.Week);

  const headerTitle = getHeaderDate(selectedDay, MONTH_NAMES);
  const weekNames = getWeekDayNames(DAY_NAMES_SHORT, firstDay);
  const weekDays = getWeekDays(selectedDay, firstDay);
  const weeks = getMonthWeeks(selectedDay, firstDay);

  const handleModeChange = () => {
    setMode(prev =>
      prev === CalendarMode.Week ? CalendarMode.Month : CalendarMode.Week,
    );
  };

  const handleToday = () => {
    setSelectedDay(new Date());
  };

  const handlePrev = () => {
    const startOfPrevWeek = addDays(selectedDay, -DAYS_IN_WEEK);

    const startOfPrevMonth = onlyDate(
      selectedDay.getFullYear(),
      selectedDay.getMonth() - 1,
      1,
    );

    setSelectedDay(
      mode === CalendarMode.Week ? startOfPrevWeek : startOfPrevMonth,
    );
  };

  const handleNext = () => {
    const startOfNextWeek = addDays(selectedDay, DAYS_IN_WEEK);

    const startOfNextMonth = onlyDate(
      selectedDay.getFullYear(),
      selectedDay.getMonth() + 1,
      1,
    );

    setSelectedDay(
      mode === CalendarMode.Week ? startOfNextWeek : startOfNextMonth,
    );
  };

  const renderCalendar = () =>
    mode === CalendarMode.Week ? (
      <WeekCalendar weekDays={weekDays} onSelectDay={setSelectedDay} />
    ) : (
      <MonthCalendar weeks={weeks} onSelectDay={setSelectedDay} />
    );

  return (
    <View style={s.container}>
      <CalendarHeader
        title={headerTitle}
        mode={mode}
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
};

// TODO: Move to Translations
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

//
// LocaleConfig.locales.ru = {
//   monthNames: [
//     'Январь',
//     'Февраль',
//     'Март',
//     'Апрель',
//     'Май',
//     'Июнь',
//     'Июль',
//     'Август',
//     'Сентябрь',
//     'Октябрь',
//     'Ноябрь',
//     'Декабрь',
//   ],
//   monthNamesShort: [
//     'Январь',
//     'Февраль',
//     'Март',
//     'Апрель',
//     'Май',
//     'Июнь',
//     'Июль',
//     'Август',
//     'Сентябрь',
//     'Октябрь',
//     'Ноябрь',
//     'Декабрь',
//   ],
//   dayNames: [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота',
//   ],
//   dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
//   today: 'Сегодня',
// };
//
// LocaleConfig.locales.en = {
//   monthNames: [
//     'Janvier',
//     'Février',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juillet',
//     'Août',
//     'Septembre',
//     'Octobre',
//     'Novembre',
//     'Décembre',
//   ],
//   monthNamesShort: [
//     'Janv.',
//     'Févr.',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juil.',
//     'Août',
//     'Sept.',
//     'Oct.',
//     'Nov.',
//     'Déc.',
//   ],
//   dayNames: [
//     'Dimanche',
//     'Lundi',
//     'Mardi',
//     'Mercredi',
//     'Jeudi',
//     'Vendredi',
//     'Samedi',
//   ],
//   dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
//   today: "Aujourd'hui",
// };
//
// LocaleConfig.defaultLocale = 'ru';

export default CustomCalendar;
