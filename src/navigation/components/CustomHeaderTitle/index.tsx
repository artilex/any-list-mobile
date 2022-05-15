import React from 'react';

import s from './styles';
import CustomText from 'src/components/CustomText';

type Props = {
  title: string;
};

const CustomHeaderTitle = ({title}: Props) => (
  <CustomText title style={s.text}>
    {title}
  </CustomText>
);

export default CustomHeaderTitle;
