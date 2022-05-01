import React from 'react';
import {Text, View} from 'react-native';

import s from './styles';

type Props = {
  dayName: string;
};

const WeekDayName = React.memo(({dayName}: Props) => (
  <View style={s.weekDayNameContainer}>
    <Text style={s.weekDayNameText}>{dayName}</Text>
  </View>
));

export default WeekDayName;
