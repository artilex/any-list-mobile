import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import s from './styles';
import CalendarSvg from 'src/assets/images/calendar.svg';
import ActiveCalendarSvg from 'src/assets/images/calendar-active.svg';
import {CustomCalendar} from 'src/components';

const Calendar = () => {
  const {t} = useTranslation();
  const [a, setA] = useState(false);
  const Icon = a ? ActiveCalendarSvg : CalendarSvg;
  return (
    <View style={s.container}>
      <CustomCalendar />
    </View>
  );
};

export default Calendar;
