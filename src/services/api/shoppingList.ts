import {sameDays} from 'src/components/CustomCalendar/utils';
import {ShoppingItem} from 'src/types/shoppingList';

export type ShoppingGroup = {
  id: string;
  name: string;
};

const GROUP_LIST: ShoppingGroup[] = [
  {
    id: 'gl1',
    name: 'Food',
  },
  {
    id: 'gl2',
    name: 'Clothes',
  },
];

const SHOPPING_LIST: ShoppingItem[] = [
  {
    id: 'xid1',
    name: 'Chicken',
    price: {
      value: 320,
      currency: 'RUB',
    },
    date: '2022-05-03',
    group: 'gl1',
    bought: false,
  },
  {
    id: 'xid2',
    name: 'Pants',
    price: {
      value: 2000,
      currency: 'RUB',
    },
    date: '2022-05-03',
    group: 'gl2',
    bought: false,
  },
  {
    id: 'xid3',
    name: 'White T-Shirt',
    price: {
      value: 1500,
      currency: 'RUB',
    },
    date: '2022-05-03',
    group: 'gl2',
    bought: false,
  },
  {
    id: 'xid4',
    name: 'Chicken',
    price: {
      value: 320,
      currency: 'RUB',
    },
    date: '2022-05-05',
    group: 'gl1',
    bought: false,
  },
];

// export type ShoppingGroupWithItems = ShoppingGroup & {
//   items: ShoppingItem[];
// };

// export const getShoppingListByGroup = async (): Promise<
//   ShoppingGroupWithItems[]
// > => {
//   const list = GROUP_LIST.map(group => ({
//     ...group,
//     items: SHOPPING_LIST.filter(item => item.group === group.id),
//   }));
//
//   return new Promise(resolve => {
//     setTimeout(() => resolve(list), 1000);
//   });
// };

// export const getShoppingGroups = async (): Promise<ShoppingGroup[]> => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(GROUP_LIST), 1000);
//   });
// };

export const getShoppingList = async (
  selectedDate: Date,
): Promise<ShoppingItem[]> => {
  const list = SHOPPING_LIST.filter(item =>
    sameDays(new Date(item.date), selectedDate),
  );

  return new Promise(resolve => {
    setTimeout(() => resolve(list), 100);
  });
};

export const addItemToShoppingList = async (): Promise<ShoppingItem[]> => {
  const list = SHOPPING_LIST.filter(item =>
    sameDays(new Date(item.date), new Date()),
  );

  return new Promise(resolve => {
    setTimeout(() => resolve(list), 100);
  });
};

export const deleteFromShoppingList = (itemId: string): Promise<void> => {
  console.log('DELETE', itemId);

  return new Promise(resolve => {
    setTimeout(() => resolve(undefined), 100);
  });
};
