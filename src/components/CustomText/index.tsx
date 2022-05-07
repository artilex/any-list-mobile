import React from 'react';
import {Text, TextProps} from 'react-native';

import s from './styles';

type Props = TextProps & {
  small?: boolean;
  title?: boolean;
};

const CustomText = ({small, title, children, style, ...rest}: Props) => (
  <Text
    style={[s.default, style, small && s.small, title && s.title]}
    {...rest}>
    {children}
  </Text>
);

export default CustomText;
