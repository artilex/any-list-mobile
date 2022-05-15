import {StyleSheet} from 'react-native';
import {BACKGROUND_COLORS, BORDER, PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
  },
  body: {
    flex: 1,
    borderTopColor: BORDER.color,
    borderTopWidth: BORDER.width,
  },
  flatList: {
    margin: PADDINGS.regular,
  },
  addButton: {
    position: 'absolute',
    right: PADDINGS.regular,
    bottom: PADDINGS.regular,
  },
});
