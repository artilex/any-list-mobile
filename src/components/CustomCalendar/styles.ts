import {StyleSheet} from 'react-native';
import {Theme} from 'react-native-calendars/src/types';

import {
  BACKGROUND_COLORS,
  COLORS,
  FONT_COLORS,
  FONT_FAMILY,
  FONT_SIZES,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    //
  },
});

export const calendarTheme: Theme = {
  backgroundColor: BACKGROUND_COLORS.primary,
  calendarBackground: BACKGROUND_COLORS.primary,

  selectedDayTextColor: COLORS.white,
  selectedDayBackgroundColor: COLORS.bluePrimary,
  // TODO: Check these later...
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  indicatorColor: 'blue',

  todayTextColor: FONT_COLORS.secondary,
  textDisabledColor: COLORS.grayPrimary,
  dayTextColor: FONT_COLORS.primary,
  textDayFontSize: FONT_SIZES.regular,
  textDayFontFamily: FONT_FAMILY.extraBold,

  monthTextColor: FONT_COLORS.primary,
  textMonthFontSize: FONT_SIZES.large,
  textMonthFontFamily: FONT_FAMILY.extraBold,

  textSectionTitleDisabledColor: COLORS.graySecondary,
  textSectionTitleColor: COLORS.graySecondary,
  textDayHeaderFontSize: FONT_SIZES.regular,
  textDayHeaderFontFamily: FONT_FAMILY.extraBold,
};
