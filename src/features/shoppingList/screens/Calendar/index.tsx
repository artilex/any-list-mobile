import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import s from './styles';
import PlusIcon from 'src/assets/images/circle-plus.svg';
import {CustomCalendar} from 'src/components';
import {ICON_SIZES} from 'src/constants/theme';
import ShoppingItemCard from './components/ShoppingItemCard';
import {ShoppingItem} from 'src/types/shoppingList';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from 'src/store';
import {loadShoppingItem} from 'src/store/shoppingList';
import {
  CalendarScreenNames,
  CalendarStackParamList,
} from 'src/navigation/types';
import {TDate} from 'src/services/DateService';

const START_FROM_MONDAY = 1;

type NavigationProp = StackNavigationProp<
  CalendarStackParamList,
  CalendarScreenNames.CalendarList
>;

const Calendar = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [selectedDay, setSelectedDay] = useState(new Date());

  const {
    data: shoppingList,
    // TODO: Add Error Screen or Error Toast
    error,
    // TODO: Add Loader Screen
    status,
  } = useSelector((state: RootReducer) => state.shoppingList);

  useEffect(() => {
    dispatch(loadShoppingItem(selectedDay));
  }, [dispatch, selectedDay]);

  const weekDayNamesShort = useMemo(
    () => [
      t('calendar.day.su'),
      t('calendar.day.mo'),
      t('calendar.day.tu'),
      t('calendar.day.we'),
      t('calendar.day.th'),
      t('calendar.day.fr'),
      t('calendar.day.sa'),
    ],
    [t],
  );

  const monthNames = useMemo(
    () => [
      t('calendar.month.january'),
      t('calendar.month.february'),
      t('calendar.month.march'),
      t('calendar.month.april'),
      t('calendar.month.may'),
      t('calendar.month.june'),
      t('calendar.month.july'),
      t('calendar.month.august'),
      t('calendar.month.september'),
      t('calendar.month.october'),
      t('calendar.month.november'),
      t('calendar.month.december'),
    ],
    [t],
  );

  const handleSelectDay = useCallback(day => {
    setSelectedDay(day);
  }, []);

  const handleCreateItem = () => {
    const date = new TDate();

    navigation.navigate(CalendarScreenNames.EditShoppingItem, {
      day: date.getDate(),
    });
  };

  const keyExtractor = useCallback((item: ShoppingItem) => item.id, []);

  // TODO: 0. Mock api requests in api client (IN PROGRESS)
  // TODO: 1. Implement Shopping Item Card (ADD COUNT AND FULL PRICE OF THIS)
  // TODO: 2. Add Redux and Move Logic there.
  //  It needs in order to get items for selected day(WHICH ALSO NEED TO STORE) after adding, deleting and changing
  // TODO: 3. Implement adding of a new Shopping Item (move to new screen or open modal)
  // TODO: 4. Implement deleting Shopping item (with gesture from right to left and click delete)
  // TODO: 5. Implement editing Shopping item (with long press)
  // TODO: 6. Finish Calendar Screen
  //
  // TODO: Plan Shopping Screen. For current day, I should see shopping list and checked items as bought
  return (
    <View style={s.container}>
      <CustomCalendar
        firstDay={START_FROM_MONDAY}
        weekDayNames={weekDayNamesShort}
        monthNames={monthNames}
        selectedDay={selectedDay}
        onSelectDay={handleSelectDay}
      />

      <View style={s.body}>
        <FlatList
          style={s.flatList}
          data={shoppingList}
          renderItem={ShoppingItemCard}
          keyExtractor={keyExtractor}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={s.addButton}
          onPress={handleCreateItem}>
          <PlusIcon width={ICON_SIZES.large} height={ICON_SIZES.large} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calendar;
