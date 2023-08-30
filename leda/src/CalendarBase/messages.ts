export interface DefaultCalendarMessages {
  monthNames: [jan: string, feb: string, mar: string, apr: string, may: string, jun: string, jul: string, aug: string, sep: string, oct: string, nov: string, dec: string],
  shortMonthNames: [jan: string, feb: string, mar: string, apr: string, may: string, jun: string, jul: string, aug: string, sep: string, oct: string, nov: string, dec: string],
  weekDays: [sun: string, mon: string, tue: string, wed: string, thu: string, fri: string, sat: string],
  shortWeekDays: [sun: string, mon: string, tue: string, wed: string, thu: string, fri: string, sat: string],
  firstWeekDay: 0 | 1 | 2 | 3 | 4 | 5 | 6,
}

export const defaultCalendarMessages: DefaultCalendarMessages = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekDays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  shortWeekDays: [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ],
  firstWeekDay: 1,
};