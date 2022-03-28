import React, {useState} from 'react';
import {View} from 'react-native';
import moment from 'moment';

import s from './styles';
import MonthCalendar from 'src/components/CustomCalendar/MonthCalendar';
import WeekCalendar from 'src/components/CustomCalendar/WeekCalendar';

type Props = {
  onSelectDay: (day: string) => void;
};

const CustomCalendar = ({onSelectDay}: Props) => {
  // const [selectedDay, setSelectedDay] = useState('');
  // const markedDates = {[selectedDay]: {selected: true}};
  const currentDate = moment().format('YYYY-MM-DD');
  console.log('currentDate');
  console.log(currentDate);
  if (false) {
    return <WeekCalendar current={currentDate} />;
  }

  return <MonthCalendar onSelectDay={onSelectDay} />;
};

export default CustomCalendar;
