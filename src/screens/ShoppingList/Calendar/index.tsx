import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import s from './styles';
import CalendarSvg from '../../../assets/images/calendar.svg';
import ActiveCalendarSvg from '../../../assets/images/calendar-active.svg';

const Calendar = () => {
  const {t} = useTranslation();
  const [a, setA] = useState(false);
  const Icon = a ? ActiveCalendarSvg : CalendarSvg;
  return (
    <View style={s.container}>
      <Text>Shopping List Calendar</Text>
      <Text>{t('shoppingList.calendar.test')}</Text>
      <Icon width={32} height={32} />
      <Button title={'Click'} onPress={() => setA(prev => !prev)} />
    </View>
  );
};

export default Calendar;
