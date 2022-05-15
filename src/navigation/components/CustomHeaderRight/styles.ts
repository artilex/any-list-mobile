import {StyleSheet} from 'react-native';
import {FONT_COLORS, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    marginRight: PADDINGS.regular,
    padding: PADDINGS.small,
  },
  text: {
    color: FONT_COLORS.secondary,
    textTransform: 'uppercase',
  },
});
