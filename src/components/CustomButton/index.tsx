import React from 'react';
import {TouchableOpacity} from 'react-native';

import s from './styles';
import CustomText from 'src/components/CustomText';

type Props = {
  text: string;
  onPress: () => void;
};

// TODO: 1 Take color as a prop
// TODO: 2 Add disabled prop with gray color
// TODO: 3 Implement animation for press (reduce bottom border with)
const CustomButton = ({text, onPress}: Props) => (
  <TouchableOpacity activeOpacity={0.6} style={s.container} onPress={onPress}>
    <CustomText style={s.text}>{text}</CustomText>
  </TouchableOpacity>
);

export default CustomButton;
