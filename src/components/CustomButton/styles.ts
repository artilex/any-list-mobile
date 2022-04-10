import {StyleSheet} from 'react-native';
import {BORDER, COLORS, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    borderColor: COLORS.bluePrimary,
    borderWidth: BORDER.width,
    borderBottomWidth: BORDER.bottomWidth,
    borderRadius: BORDER.radius,
    paddingVertical: PADDINGS.extraSmall,
    paddingHorizontal: PADDINGS.regular,
  },
  text: {
    color: COLORS.bluePrimary,
  },
});
