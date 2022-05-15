import React from 'react';

import s from './styles';
import CustomText from 'src/components/CustomText';
import {TouchableOpacity} from 'react-native';

type Props = {
  saveLabel: string;
  onSave?: () => void;
};

const CustomHeaderRight = ({saveLabel, onSave}: Props) => (
  <TouchableOpacity activeOpacity={0.7} style={s.container} onPress={onSave}>
    <CustomText title style={s.text}>
      {saveLabel}
    </CustomText>
  </TouchableOpacity>
);

export default CustomHeaderRight;
