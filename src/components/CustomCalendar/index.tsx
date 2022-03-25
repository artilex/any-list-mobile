import React from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

import s from './styles';
import LeftArrowIcon from 'src/assets/images/left-arrow.svg';
import RightArrowIcon from 'src/assets/images/right-arrow.svg';
import {
  BACKGROUND_COLORS,
  FONT_COLORS,
  FONT_SIZES,
  ICON_SIZES,
} from 'src/constants/theme';

const CustomCalendar = () => {
  const disableArrows = false;

  const renderArrow = (direction: string) => {
    const ArrowIcon = direction === 'left' ? LeftArrowIcon : RightArrowIcon;
    const {regular} = ICON_SIZES;

    return <ArrowIcon width={regular} height={regular} />;
  };

  return (
    <View style={s.container}>
      <Calendar
        minDate={'2020-01-01'}
        maxDate={'2099-12-31'}
        firstDay={1}
        monthFormat={'MMMM yyyy'}
        renderHeader={date => {
          console.log(date);
          return (
            <Text
              style={{
                color: FONT_COLORS.secondary,
                fontSize: FONT_SIZES.large,
                fontWeight: '700',
              }}>
              {'June 2022'}
            </Text>
          );
        }}
        disableArrowLeft={disableArrows}
        disableArrowRight={disableArrows}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        renderArrow={renderArrow}
        onDayPress={day => {
          console.log('selected day', day);
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

export default CustomCalendar;
