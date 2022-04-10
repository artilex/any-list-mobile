export enum CalendarMode {
  Week = 'W',
  Month = 'M',
}

export type CalendarDay = {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
  isCurrent: boolean;
};
