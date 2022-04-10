import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import LeftArrowIcon from 'src/assets/images/left-arrow.svg';
import RightArrowIcon from 'src/assets/images/right-arrow.svg';
import {ICON_SIZES} from 'src/constants/theme';
import {CustomButton, CustomText} from 'src/components';
import s from './styles';

type Props = {
  title: string;
  mode: string;
  onPrev: () => void;
  onNext: () => void;
  onModeChange: () => void;
  onToday: () => void;
};

const CalendarHeader = ({
  title,
  mode,
  onPrev,
  onNext,
  onModeChange,
  onToday,
}: Props) => {
  const {regular} = ICON_SIZES;
  return (
    <View style={s.calendarHeaderContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPrev}>
        <LeftArrowIcon width={regular} height={regular} />
      </TouchableOpacity>
      <View style={s.horizontalSplitter} />
      <View style={s.calendarHeaderTitle}>
        <View style={s.calendarHeaderTitleWrapper}>
          <CustomText style={s.titleText}>{title}</CustomText>
        </View>
        <CustomButton text={mode} onPress={onModeChange} />
        <View style={s.horizontalSplitter} />
        <CustomButton text={'T'} onPress={onToday} />
      </View>
      <View style={s.horizontalSplitter} />
      <TouchableOpacity activeOpacity={0.6} onPress={onNext}>
        <RightArrowIcon width={regular} height={regular} />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarHeader;
