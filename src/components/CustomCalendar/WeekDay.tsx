import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import s from './styles';

type Props = {
  day: number;
  isToday?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  onSelectDay: () => void;
};

const WeekDay = ({
  day,
  isToday,
  isSelected,
  isDisabled,
  onSelectDay,
}: Props) => (
  <View style={s.weekDayContainer}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={onSelectDay}
      style={[
        s.weekDayWrapper,
        isSelected && isToday && s.weekDaySelectedToday,
        isSelected && !isToday && s.weekDaySelected,
      ]}>
      <Text
        style={[
          s.weekDayText,
          isToday && !isSelected && s.weekDayTodayText,
          isToday && isSelected && s.weekDayTodaySelectedText,
          isDisabled && s.weekDayDisabledText,
        ]}>
        {day}
      </Text>
    </TouchableOpacity>
  </View>
);

export default WeekDay;
