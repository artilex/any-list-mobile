import React from 'react';
import {Pressable, View} from 'react-native';

import s from './styles';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
};

const CardLayout = ({children, onPress}: Props) => (
  <Pressable
    style={({pressed}) => [s.container, pressed && s.pressed]}
    onPress={onPress}>
    {children}
  </Pressable>
);

export default CardLayout;
