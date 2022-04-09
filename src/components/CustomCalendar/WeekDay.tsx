import React from 'react';
import {Text, View} from 'react-native';

import s from './styles';

type Props = {
  day: number;
};

const WeekDay = ({day}: Props) => (
  <View style={s.weekDayContainer}>
    <Text style={s.weekDayText}>{day}</Text>
  </View>
);

export default WeekDay;
