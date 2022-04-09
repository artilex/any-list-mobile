import React from 'react';
import {Text, TextProps} from 'react-native';

import s from './styles';

type Props = TextProps & {
  //
};

const CustomText = ({children, style, ...rest}: Props) => (
  <Text style={[s.default, style]} {...rest}>
    {children}
  </Text>
);

export default CustomText;
