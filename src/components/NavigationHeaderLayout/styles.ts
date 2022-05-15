import {StyleSheet} from 'react-native';
import {BACKGROUND_COLORS, COLORS, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.regular,
    paddingVertical: PADDINGS.small,
  },
  titleText: {
    color: COLORS.graySecondary,
  },
  rightBlock: {
    padding: PADDINGS.small,
  },
});
