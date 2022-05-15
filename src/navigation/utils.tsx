import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {SvgProps} from 'react-native-svg';

import {ShoppingListTabParamList} from 'src/navigation/types';
import {BORDER, ICON_SIZES} from 'src/constants/theme';
import CalendarIcon from 'src/assets/images/calendar.svg';
import ActiveCalendarIcon from 'src/assets/images/calendar-active.svg';
import SettingsIcon from 'src/assets/images/settings.svg';
import ActiveSettingsIcon from 'src/assets/images/settings-active.svg';

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

export const tabScreenOptions = ({
  route,
}: RouteProps): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: ICON_SIZES.regular * 1.6,
      borderColor: BORDER.color,
      borderTopWidth: BORDER.width,
      borderBottomWidth: 0,
      paddingBottom: 0,
      elevation: 0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
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
