export type ShoppingListTabParamList = {
  Calendar: undefined;
  Settings: undefined;
};
export enum ShoppingListScreenNames {
  Calendar = 'Calendar',
  Settings = 'Settings',
}

export type CalendarStackParamList = {
  CalendarList: undefined;
  EditShoppingItem: {
    day: Date;
    itemId?: string;
  };
};
export enum CalendarScreenNames {
  CalendarList = 'CalendarList',
  EditShoppingItem = 'EditShoppingItem',
}
