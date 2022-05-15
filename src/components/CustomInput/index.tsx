import React from 'react';
import {View} from 'react-native';

import s from './styles';
import CustomText from 'src/components/CustomText';

type Props = {
  //
};

const CustomInput = ({}: Props) => (
  <View style={s.container}>
    <CustomText>Hey</CustomText>
  </View>
);

export default CustomInput;
