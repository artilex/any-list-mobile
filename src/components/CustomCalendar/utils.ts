import {DAYS_IN_WEEK} from 'src/constants/date';
import {CalendarDay} from './types';

export const onlyDate = (year: number, month: number, day: number): Date => {
  return new Date(Date.UTC(year, month, day));
};

export const getHeaderDate = (current: Date, monthNames: string[]): string => {
  const monthIndex = current.getMonth();
  const month = monthNames[monthIndex];

  const year = current.getFullYear();

  return `${month} ${year}`;
};

export const getWeekDays = (current: Date, firstDay: number): CalendarDay[] => {
  const startOfCurrentWeek = getStartOfWeek(current, firstDay);
  const weekDates = [];

  for (let dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
    const day = addDays(startOfCurrentWeek, dayIndex);
    weekDates.push({
      date: day,
      isToday: sameDays(day, new Date()),
      isSelected: sameDays(day, current),
      isCurrent: true,
    });
  }

  return weekDates;
};

export const getStartOfWeek = (current: Date, firstDay: number): Date => {
  const currentDay = current.getDay();

  let daysFromFirst = currentDay - firstDay;
  if (daysFromFirst < 0) {
    daysFromFirst += DAYS_IN_WEEK;
  }

  return addDays(current, -daysFromFirst);
};

export const getEndOfWeek = (current: Date, firstDay: number = 0): Date => {
  const currentDay = current.getDay();

  let daysToEnd = firstDay - 1 - currentDay;
  if (daysToEnd < 0) {
    daysToEnd += DAYS_IN_WEEK;
  }

  return addDays(current, daysToEnd);
};

export const addDays = (current: Date, days: number): Date => {
  const finalDate = new Date(current);
  finalDate.setDate(current.getDate() + days);

  return finalDate;
};

export const getPrevMonthDays = (
  current: Date,
  firstDay: number,
): CalendarDay[] => {
  const year = current.getFullYear();
  const month = current.getMonth();

  const startOfCurrentMonth = onlyDate(year, month, 1);
  if (startOfCurrentMonth.getDay() === firstDay) {
    return [];
  }

  const lastDay = onlyDate(year, month, 0);
  const startWeek = getStartOfWeek(lastDay, firstDay);
  const startWeekDay = startWeek.getDate();
  const endWeekDay = lastDay.getDate();
  const days = [];

  for (let day = startWeekDay; day <= endWeekDay; day++) {
    const date = onlyDate(year, month - 1, day);

    days.push({
      date,
      isToday: sameDays(date, new Date()),
      isSelected: sameDays(date, current),
      isCurrent: false,
    });
  }

  return days;
};

export const currentMonthDays = (current: Date): CalendarDay[] => {
  const year = current.getFullYear();
  const month = current.getMonth();

  const monthDays = new Date(year, month + 1, 0).getDate();
  const currentDays = [];

  for (let day = 1; day <= monthDays; day++) {
    const date = onlyDate(year, month, day);

    currentDays.push({
      date,
      isToday: sameDays(date, new Date()),
      isSelected: sameDays(date, current),
      isCurrent: true,
    });
  }

  return currentDays;
};

export const getNextMonthDays = (
  current: Date,
  firstDay: number,
): CalendarDay[] => {
  const year = current.getFullYear();
  const month = current.getMonth();

  const startOfMonth = onlyDate(year, month + 1, 1);
  const endWeek = getEndOfWeek(startOfMonth, firstDay);

  if (startOfMonth.getDay() === firstDay) {
    return [];
  }

  const days = [];

  for (let day = 1; day <= endWeek.getDate(); day++) {
    const date = onlyDate(year, month + 1, day);

    days.push({
      date,
      isToday: sameDays(date, new Date()),
      isSelected: sameDays(date, current),
      isCurrent: false,
    });
  }

  return days;
};

export const getWeeks = (days: CalendarDay[]): CalendarDay[][] => {
  const weeks = [];

  const weekCount = Math.ceil(days.length / DAYS_IN_WEEK);
  for (let weekIndex = 0; weekIndex < weekCount; weekIndex++) {
    const week = [];
    for (let day = 0; day < DAYS_IN_WEEK; day++) {
      const currentIndex = weekIndex * DAYS_IN_WEEK + day;
      if (currentIndex >= days.length) {
        break;
      }
      week.push(days[weekIndex * DAYS_IN_WEEK + day]);
    }
    weeks.push(week);
  }

  return weeks;
};

export const getWeekDayNames = (
  shorDayNames: string[],
  firstDay: number = 0,
): string[] => {
  let dayNames = [...shorDayNames];

  if (firstDay > 0 && firstDay < DAYS_IN_WEEK) {
    dayNames = dayNames.slice(firstDay).concat(dayNames.slice(0, firstDay));
  }

  return dayNames;
};

export const getMonthWeeks = (current: Date, firstDay: number) => {
  const prevDays = getPrevMonthDays(current, firstDay);
  const currentDays = currentMonthDays(current);
  const nextDays = getNextMonthDays(current, firstDay);

  const days = [...prevDays, ...currentDays, ...nextDays];

  return getWeeks(days);
};

export const sameDays = (first: Date, second: Date) => {
  const sameYear = first.getFullYear() === second.getFullYear();
  const sameMonth = first.getMonth() === second.getMonth();
  const sameDay = first.getDate() === second.getDate();

  return sameYear && sameMonth && sameDay;
};
