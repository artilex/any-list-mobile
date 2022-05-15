import {StyleSheet} from 'react-native';
import {BORDER, COLORS, PADDINGS} from 'src/constants/theme';

export const styles = (color: string = COLORS.bluePrimary) =>
  StyleSheet.create({
    container: {
      borderColor: color,
      borderWidth: BORDER.width,
      borderBottomWidth: BORDER.bottomWidth,
      borderRadius: BORDER.radius,
      paddingVertical: PADDINGS.extraSmall,
      paddingHorizontal: PADDINGS.regular,
    },
    pressed: {
      borderBottomWidth: BORDER.width,
    },
    disabled: {
      borderBottomWidth: BORDER.width,
      borderColor: BORDER.color,
    },
    text: {
      color: color,
    },
    disabledText: {
      color: COLORS.graySecondary,
    },
  });
