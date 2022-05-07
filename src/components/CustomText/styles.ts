import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONT_COLORS,
  FONT_FAMILY,
  FONT_SIZES,
} from 'src/constants/theme';

export default StyleSheet.create({
  default: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.regular,
    color: FONT_COLORS.primary,
  },
  small: {
    fontSize: FONT_SIZES.small,
    color: COLORS.graySecondary,
  },
  title: {
    fontFamily: FONT_FAMILY.extraBold,
  },
});
