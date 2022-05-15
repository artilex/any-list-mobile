import {StyleSheet} from 'react-native';
import {
  BORDER,
  COLORS,
  FONT_COLORS,
  FONT_SIZES,
  PADDINGS,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    //
  },
  labelText: {
    color: COLORS.graySecondary,
  },
  inputWrapper: {
    marginTop: PADDINGS.small,
    borderRadius: BORDER.radius,
    borderWidth: BORDER.width,
    borderColor: BORDER.color,
    backgroundColor: COLORS.grayFourth,
  },
  focused: {
    borderColor: COLORS.bluePrimary,
  },
  input: {
    paddingHorizontal: PADDINGS.large,
    paddingVertical: PADDINGS.small,
    fontSize: FONT_SIZES.regular,
    color: FONT_COLORS.primary,
  },
});
