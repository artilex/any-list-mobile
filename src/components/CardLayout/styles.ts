import {StyleSheet} from 'react-native';
import {BACKGROUND_COLORS, BORDER, COLORS, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLORS.primary,
    borderRadius: BORDER.radius,
    borderWidth: BORDER.width,
    borderColor: BORDER.color,
    padding: PADDINGS.small,
  },
  pressed: {
    borderColor: COLORS.blueFourth,
    backgroundColor: COLORS.blueThird,
  },
});
