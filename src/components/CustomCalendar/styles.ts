import {StyleSheet} from 'react-native';
import {Theme} from 'react-native-calendars/src/types';

import {
  BACKGROUND_COLORS,
  COLORS,
  FONT_COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  PADDINGS,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    //
  },
  calendarHeaderContainer: {
    flexDirection: 'row',
  },
  calendarHeaderTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarHeaderTitleWrapper: {
    flex: 1,
  },
  titleText: {
    fontSize: FONT_SIZES.regular,
    fontFamily: FONT_FAMILY.extraBold,
  },
  arrowIconWrapper: {
    paddingVertical: PADDINGS.regular,
    paddingHorizontal: PADDINGS.large,
  },
  weekCalendarContainer: {
    flexDirection: 'row',
  },
  weekDayNamesContainer: {
    flexDirection: 'row',
  },
  weekDayNameContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: PADDINGS.extraSmall,
  },
  weekDayNameText: {
    fontFamily: FONT_FAMILY.extraBold,
    fontSize: FONT_SIZES.small,
    color: COLORS.graySecondary,
  },
  weekDayContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: PADDINGS.small,
  },
  weekDayText: {
    color: FONT_COLORS.primary,
    fontSize: FONT_SIZES.regular,
    fontFamily: FONT_FAMILY.extraBold,
  },
  horizontalSplitter: {
    width: PADDINGS.small,
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
