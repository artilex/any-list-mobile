import {StyleSheet} from 'react-native';
import {BACKGROUND_COLORS, FONT_COLORS, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
  },
  titleButtonText: {
    color: FONT_COLORS.secondary,
    textTransform: 'uppercase',
  },
  form: {
    marginHorizontal: PADDINGS.large,
  },
  row: {
    marginBottom: PADDINGS.large,
  },
});
