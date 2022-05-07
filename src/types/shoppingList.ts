export type ShoppingItem = {
  id: string;
  name: string;
  price?: {
    value: number;
    currency: string;
  };
  date: string;
  group: string;
  bought: boolean;
};
