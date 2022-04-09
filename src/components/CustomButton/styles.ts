import {StyleSheet} from 'react-native';
import {BORDER, COLORS, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    borderColor: COLORS.graySecondary,
    borderWidth: BORDER.width,
    borderBottomWidth: BORDER.bottomWidth,
    borderRadius: BORDER.radius,
    paddingVertical: PADDINGS.extraSmall,
    paddingHorizontal: PADDINGS.small,
  },
});
