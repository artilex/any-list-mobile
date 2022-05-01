import React from 'react';
import {Pressable} from 'react-native';

import {styles} from './styles';
import CustomText from 'src/components/CustomText';

type Props = {
  text: string;
  color?: string;
  disabled?: boolean;
  onPress: () => void;
};

const CustomButton = ({text, color, disabled, onPress}: Props) => {
  const s = styles(color);

  return (
    <Pressable
      style={({pressed}) => [
        s.container,
        pressed && s.pressed,
        disabled && s.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <CustomText style={[s.text, disabled && s.disabledText]}>
        {text}
      </CustomText>
    </Pressable>
  );
};

export default CustomButton;
