import {StyleSheet} from 'react-native';
import {PADDINGS} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: PADDINGS.regular,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstItem: {
    flex: 1,
    marginRight: PADDINGS.extraSmall,
  },
});
