import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';

import s, {calendarTheme} from './styles';
import LeftArrowIcon from 'src/assets/images/left-arrow.svg';
import RightArrowIcon from 'src/assets/images/right-arrow.svg';
import {ICON_SIZES} from 'src/constants/theme';

const DISABLE_ARROW = false;

type Props = {
  onSelectDay: (day: string) => void;
};

const MonthCalendar = ({onSelectDay}: Props) => {
  const [selectedDay, setSelectedDay] = useState('');
  const markedDates = {[selectedDay]: {selected: true}};

  const renderArrow = (direction: string) => {
    const ArrowIcon = direction === 'left' ? LeftArrowIcon : RightArrowIcon;
    const {regular} = ICON_SIZES;

    return <ArrowIcon width={regular} height={regular} />;
  };

  return (
    <View style={s.container}>
      <Calendar
        markedDates={{
          ...markedDates,
          // '2022-03-16': {selected: true},
          // '2022-03-17': {marked: true},
          // '2022-03-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          // '2022-03-19': {disabled: true, disableTouchEvent: true},
        }}
        theme={calendarTheme}
        minDate={'2020-01-01'}
        maxDate={'2099-12-31'}
        firstDay={1}
        monthFormat={'MMMM yyyy'}
        disableArrowLeft={DISABLE_ARROW}
        disableArrowRight={DISABLE_ARROW}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        renderArrow={renderArrow}
        onDayPress={day => {
          const {dateString} = day;
          setSelectedDay(dateString);
          onSelectDay(dateString);
        }}
        onDayLongPress={day => {
          console.log('long selected day', day);
        }}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
      />
    </View>
  );
};

LocaleConfig.locales.ru = {
  monthNames: [
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
  ],
  monthNamesShort: [
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
  ],
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};

LocaleConfig.locales.en = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'ru';

export default MonthCalendar;
