export const CALENDAR_CLICK_ACTION = {
  DATES_PREV: 'dates-prev-button',
  DATES_NEXT: 'dates-next-button',
  DATES_SELECT: 'dates-select',
  MONTHS_PREV: 'month-prev-button',
  MONTHS_NEXT: 'month-next-button',
  MONTHS_SELECT: 'month-select',
  YEARS_PREV: 'years-prev-button',
  YEARS_NEXT: 'years-next-button',
  YEARS_SELECT: 'years-select',
  TITLE_CLICK: 'title-click',
  TODAY_BUTTON_CLICK: 'today-button-click',
} as const;

export const VIEW_TYPES = {
  DATES: 'dates',
  MONTHS: 'months',
  YEARS: 'years',
} as const;

export const BUTTON_TYPE = {
  PREV: 'prev',
  NEXT: 'next',
} as const;

export const DEFAULT_DATE_FORMAT = 'dd.MM.yyyy';
