import React from 'react';
import {TouchableOpacity} from 'react-native';

import s from './styles';
import CustomText from 'src/components/CustomText';

type Props = {
  text: string;
  onPress: () => void;
};

const CustomButton = ({text, onPress}: Props) => (
  <TouchableOpacity activeOpacity={0.6} style={s.container} onPress={onPress}>
    <CustomText>{text}</CustomText>
  </TouchableOpacity>
);

export default CustomButton;
