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
    title: string;
    day: string;
    itemId?: string;
    handleSave?: () => void;
  };
};
export enum CalendarScreenNames {
  CalendarList = 'CalendarList',
  EditShoppingItem = 'EditShoppingItem',
}
