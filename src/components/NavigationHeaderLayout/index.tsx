import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import s from './styles';
import CustomText from 'src/components/CustomText';
import CloseIcon from 'src/assets/images/close-button.svg';
import {HEADER_ICON_SIZE} from 'src/constants/theme';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  right?: React.ReactNode;
};

const NavigationHeaderLayout = ({title, right}: Props) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
        <CloseIcon width={HEADER_ICON_SIZE} height={HEADER_ICON_SIZE} />
      </TouchableOpacity>

      <CustomText style={s.titleText} title>
        {title}
      </CustomText>

      <View style={s.rightBlock}>{right}</View>
    </View>
  );
};

export default NavigationHeaderLayout;
