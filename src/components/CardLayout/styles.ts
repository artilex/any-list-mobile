import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLORS,
  BORDER,
  COLORS,
  PADDINGS,
  REGULAR_BUTTON,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLORS.primary,
    borderRadius: BORDER.radius,
    borderWidth: BORDER.width,
    borderColor: COLORS.grayPrimary,
    padding: PADDINGS.small,
  },
  pressed: {
    borderColor: COLORS.blueFourth,
    backgroundColor: COLORS.blueThird,
  },
});
