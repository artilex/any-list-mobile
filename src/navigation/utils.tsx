import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {SvgProps} from 'react-native-svg';

import {ShoppingListTabParamList} from 'src/navigation/types';
import CalendarIcon from 'src/assets/images/calendar.svg';
import ActiveCalendarIcon from 'src/assets/images/calendar-active.svg';
import SettingsIcon from 'src/assets/images/settings.svg';
import ActiveSettingsIcon from 'src/assets/images/settings-active.svg';
import {ICON_SIZES} from 'src/constants/theme';

type RouteProps = {
  route: RouteProp<ShoppingListTabParamList>;
  navigation: any;
};

type TabBarIconProps = {
  focused: boolean;
};

const Icons: {[key: string]: FC<SvgProps>} = {
  ActiveCalendar: ActiveCalendarIcon,
  Calendar: CalendarIcon,
  ActiveSettings: ActiveSettingsIcon,
  Settings: SettingsIcon,
};

export const renderTabIcons = ({route}: RouteProps) => {
  return {
    tabBarShowLabel: false,
    tabBarIcon: ({focused}: TabBarIconProps) => {
      let iconName: string = route.name;
      if (focused) {
        iconName = 'Active' + iconName;
      }

      const {regular} = ICON_SIZES;
      const Icon = Icons[iconName];

      return <Icon width={regular} height={regular} />;
    },
  };
};
