import type { Values } from '../../commonTypes';
import { getClassNames } from '../../utils';
import { BUTTON_TYPE, CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import type { DefaultCalendarMessages } from './messages';
import type {
  CalendarConditionProps,
  CalendarConditions,
  DateCellConditions,
  DateCellProps,
  MonthViewProps, YearViewProps,
} from './types';

export const isTimeLess = (firstDate?: Date | null, secondDate?: Date | null): boolean => {
  if (!firstDate || !secondDate) return false;

  const firstTime = firstDate.getHours() * 60 * 60 + firstDate.getMinutes() * 60 + firstDate.getSeconds();

  const secondTime = secondDate.getHours() * 60 * 60 + secondDate.getMinutes() * 60 + secondDate.getSeconds();

  return firstTime < secondTime;
};

export const isTimeGreater = (firstDate?: Date | null, secondDate?: Date | null): boolean => {
  if (!firstDate || !secondDate) return false;

  const firstTime = firstDate.getHours() * 60 * 60 + firstDate.getMinutes() * 60 + firstDate.getSeconds();

  const secondTime = secondDate.getHours() * 60 * 60 + secondDate.getMinutes() * 60 + secondDate.getSeconds();

  return firstTime > secondTime;
};

export const isDateLess = (firstDate?: Date | null, secondDate?: Date | null): boolean => {
  if (!firstDate || !secondDate) return false;

  const firstWithoutTime = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());

  const secondWithoutTime = new Date(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());

  return firstWithoutTime.getTime() < secondWithoutTime.getTime();
};

export const isDateGreater = (firstDate?: Date | null, secondDate?: Date | null): boolean => {
  if (!firstDate || !secondDate) return false;

  const firstWithoutTime = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());

  const secondWithoutTime = new Date(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());

  return firstWithoutTime.getTime() > secondWithoutTime.getTime();
};

export const getFirstDecadeYear = (viewDate: Date): number => Math.floor(viewDate.getFullYear() / 10) * 10;

export const isDatesEqual = (firstDate: Date, secondDate: Date): boolean => {
  const firstWithoutTime = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());

  const secondWithoutTime = new Date(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());

  return firstWithoutTime.getTime() === secondWithoutTime.getTime();
};

export const getMonthYearArray = (props?: MonthViewProps | YearViewProps): number[][] => {
  const array = [];
  const yearValue = props ? getFirstDecadeYear(props.viewDate) - 1 : 0;

  for (let row = 0; row < 3; row += 1) {
    const rowArray = [];

    for (let col = 0; col < 4; col += 1) {
      rowArray.push(col + 4 * row + yearValue);
    }
    array.push(rowArray);
  }

  return array;
};

const getWeekDays = (firstDayIndex: number, month: number, year: number, messages: DefaultCalendarMessages): number[] => {
  const weekDays: number[] = [];
  const firstDay = firstDayIndex + 1;
  const currentDate = new Date(year, month, firstDay);

  const weekDayIndicies = Array.from(new Array(7)).map((_item, index) => index);
  const orderedWeekDayIndicies = [...weekDayIndicies.slice(messages.firstWeekDay), ...weekDayIndicies.slice(0, messages.firstWeekDay).map((item) => 7 + item)];

  orderedWeekDayIndicies.forEach((weekDayIndex) => {
    const currentDay = currentDate.getDay();

    const weekDiff = weekDayIndex - currentDay;
    const weekDate = firstDay + weekDiff;

    weekDays.push(new Date(year, month, weekDate).getDate());
  });

  return weekDays;
};

export const getMonthDays = (month: number, year: number, messages: DefaultCalendarMessages): number[][] => {
  const monthDays: number[][] = [];

  if (new Date(year, month, 1).getDay() === 0) monthDays.push(getWeekDays(-7, month, year, messages));
  if (new Date(year, month, 1).getDay() === 1) monthDays.push(getWeekDays(-7, month, year, messages));

  let i = 0;

  const isLastWeekReached = (): boolean => monthDays.length >= 1
    && i > 1
    && monthDays[monthDays.length - 1].includes(
      new Date(year, month + 1, 0).getDate(),
    );

  while (!isLastWeekReached()) {
    monthDays.push(getWeekDays(7 * i, month, year, messages));
    i += 1;
  }

  if (new Date(year, month + 1, 0).getDay() === 0) monthDays.push(getWeekDays(1, month + 1, year, messages));

  return monthDays;
};

export const getMonthName = (month: number, messages: DefaultCalendarMessages): string => messages.monthNames[month];

export const getShortMonthName = (month: number, messages: DefaultCalendarMessages): string => messages.shortMonthNames[month];

export const getWeekDayName = (number: number, messages: DefaultCalendarMessages): string => messages.weekDays[number];

export const getShortWeekDayName = (number: number, messages: DefaultCalendarMessages): string => messages.shortWeekDays[number % messages.shortWeekDays.length];

export const getCalendarTitle = (viewDate: Date, viewType: Values<typeof VIEW_TYPES>, messages: DefaultCalendarMessages): string => {
  if (viewType === VIEW_TYPES.DATES) {
    return `${getMonthName(viewDate.getMonth(), messages)} ${viewDate.getFullYear()}`;
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    return viewDate.getFullYear().toString();
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const firstDecadeYear = getFirstDecadeYear(viewDate);

    return `${firstDecadeYear} - ${firstDecadeYear + 9}`;
  }

  return '';
};

export const getButtonActionType = (viewType: Values<typeof VIEW_TYPES>, buttonType: Values<typeof BUTTON_TYPE>): Values<typeof CALENDAR_CLICK_ACTION> => {
  if (viewType === VIEW_TYPES.DATES && buttonType === BUTTON_TYPE.PREV) return CALENDAR_CLICK_ACTION.DATES_PREV;

  if (viewType === VIEW_TYPES.MONTHS && buttonType === BUTTON_TYPE.PREV) return CALENDAR_CLICK_ACTION.MONTHS_PREV;

  if (viewType === VIEW_TYPES.YEARS && buttonType === BUTTON_TYPE.PREV) return CALENDAR_CLICK_ACTION.YEARS_PREV;

  if (viewType === VIEW_TYPES.DATES && buttonType === BUTTON_TYPE.NEXT) return CALENDAR_CLICK_ACTION.DATES_NEXT;

  if (viewType === VIEW_TYPES.MONTHS && buttonType === BUTTON_TYPE.NEXT) return CALENDAR_CLICK_ACTION.MONTHS_NEXT;

  if (viewType === VIEW_TYPES.YEARS && buttonType === BUTTON_TYPE.NEXT) return CALENDAR_CLICK_ACTION.YEARS_NEXT;

  return CALENDAR_CLICK_ACTION.DATES_SELECT; // never works, it is added to satisfy eslint: consistent-return
};

export const getCalendarConditions = (props: CalendarConditionProps): CalendarConditions => {
  const {
    min, max, viewDate, viewType, value,
  } = props;
  // dates view
  const isDateOutOfMinMonthRange = !!min && viewDate.getFullYear() === min.getFullYear() && viewDate.getMonth() - 1 < min.getMonth();
  const isDateOutOfMaxMonthRange = !!max && viewDate.getFullYear() === max.getFullYear() && viewDate.getMonth() + 1 > max.getMonth();
  // months view
  const isDateOutOfMinYearRange = !!min && viewDate.getFullYear() - 1 < min.getFullYear();
  const isDateOutOfMaxYearRange = !!max && viewDate.getFullYear() + 1 > max.getFullYear();
  // years view
  const firstDecadeYear = getFirstDecadeYear(viewDate);
  const isDateOutOfMinDecadeRange = !!min && firstDecadeYear < min.getFullYear();
  const isDateOutOfMaxDecadeRange = !!max && firstDecadeYear + 10 > max.getFullYear();
  // is used to turn off title in dates view
  const isOneMonthInRange = !!min && !!max && +new Date(min.getFullYear(), min.getMonth(), 1) === +new Date(max.getFullYear(), max.getMonth(), 1);
  // is used to turn off title in months view
  const isOneYearInRange = !!min && !!max && min.getFullYear() === max.getFullYear();

  const isPrevButtonDisabled = (viewType === VIEW_TYPES.DATES && !!isDateOutOfMinMonthRange)
    || (viewType === VIEW_TYPES.MONTHS && !!isDateOutOfMinYearRange)
    || (viewType === VIEW_TYPES.YEARS && !!isDateOutOfMinDecadeRange);

  const isNextButtonDisabled = (viewType === VIEW_TYPES.DATES && !!isDateOutOfMaxMonthRange)
    || (viewType === VIEW_TYPES.MONTHS && !!isDateOutOfMaxYearRange)
    || (viewType === VIEW_TYPES.YEARS && !!isDateOutOfMaxDecadeRange);

  const isTitleDisabled = (viewType === VIEW_TYPES.DATES && isOneMonthInRange)
    || (viewType === VIEW_TYPES.MONTHS && isOneYearInRange)
    || (viewType === VIEW_TYPES.YEARS);

  const isInMinRange = (min && value) ? value >= min : true;
  const isInMaxRange = (max && value) ? value <= max : true;

  return {
    isDateOutOfMaxDecadeRange,
    isDateOutOfMaxMonthRange,
    isDateOutOfMaxYearRange,
    isDateOutOfMinDecadeRange,
    isDateOutOfMinMonthRange,
    isDateOutOfMinYearRange,
    isNextButtonDisabled,
    isOneMonthInRange,
    isOneYearInRange,
    isPrevButtonDisabled,
    isTitleDisabled,
    isValueInRange: isInMinRange && isInMaxRange,
  };
};

export const getDateCellConditions = (props: DateCellProps): DateCellConditions => {
  const {
    dates, date, index, weekIndex = 0, viewDate, min, max,
  } = props;

  const firstDayOfMonth = dates[0].indexOf(1);
  const lastDayOfMonth = dates[dates.length - 1].indexOf(1);

  const isDateOfPrevMonth = (index === 0 && weekIndex < firstDayOfMonth)
    || (index === 0 && !dates[0].includes(1)
      && dates[0].includes(date));

  const isDateOfNextMonth = index === dates.length - 1 && weekIndex >= lastDayOfMonth;

  const renderedPrevMonth = isDateOfPrevMonth ? (viewDate.getMonth() - 1).toString() : null;
  const renderedNextMonth = isDateOfNextMonth ? (viewDate.getMonth() + 1).toString() : null;

  const renderedDate = new Date(
    viewDate.getFullYear(),
    Number.parseInt(renderedPrevMonth || renderedNextMonth || viewDate.getMonth()
      .toString(), 10),
    date,
  );

  const isDateOutOfMinMonthRange = !!min && renderedDate < new Date(min.getFullYear(), min.getMonth(), min.getDate());
  const isDateOutOfMaxMonthRange = !!max && renderedDate > new Date(max.getFullYear(), max.getMonth(), max.getDate());

  return {
    firstDayOfMonth,
    isDateOfNextMonth,
    isDateOfPrevMonth,
    isDateOutOfMaxMonthRange,
    isDateOutOfMinMonthRange,
    lastDayOfMonth,
    renderedDate,
    renderedNextMonth,
    renderedPrevMonth,
  };
};

export const getDateCellClassNames = (props: DateCellProps, renderedDate: Date): string | undefined => {
  const {
    theme, value, viewDate, weekDayIndex,
  } = props;

  return getClassNames(
    theme.dateCell,
    { [theme.dateCellSelected]: value && isDatesEqual(value, renderedDate) },
    { [theme.dateCellActive]: isDatesEqual(viewDate, renderedDate) },
    { [theme.dateCellToday]: isDatesEqual(new Date(), renderedDate) },
    { [theme.dateCellDayOff]: weekDayIndex === 6 || weekDayIndex === 0 },
  );
};

export const getYearCellClassNames = (props: YearViewProps, yearCell: number): string | undefined => {
  const { theme, viewDate } = props;

  const firstDecadeYear = getFirstDecadeYear(viewDate);

  return getClassNames(
    theme.yearCell,
    { [theme.yearCellActive]: viewDate.getFullYear() === yearCell },
    { [theme.yearCellDifferentDecade]: yearCell === firstDecadeYear - 1 || yearCell === firstDecadeYear + 10 },
  );
};

export const getCalendarFormat = (format: string): string => {
  const startIndex = format.indexOf('hh');
  const endIndex = format.indexOf('mm');

  if (startIndex === -1 || endIndex === -1) return format;

  return format.slice(0, startIndex) + format.slice(endIndex + 2, format.length);
};
