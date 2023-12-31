import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { formatDate } from '../DateTimeInput/helpers';
import { CALENDAR_CLICK_ACTION } from './constants';
import {
  getDateCellClassNames, getDateCellConditions,
} from './helpers';
import { getClassNames, useElement } from '../../utils';
import type { DateCellProps } from './types';
import { useMessages } from '../../utils/useMessages';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const DateCell = (props: DateCellProps): React.ReactElement => {
  const {
    date, index, theme, onClick, viewDate, dateCellRender,
  } = props;

  const messages = useMessages({
    fieldName: COMPONENTS_NAMESPACES.calendar,
  });

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const DateCellItem = useElement(
    'DateCellItem',
    Div,
    dateCellRender || dateTimeInputRenders.dateCellRender,
    props,
  );

  const {
    renderedDate,
    isDateOfPrevMonth,
    isDateOfNextMonth,
    isDateOutOfMinMonthRange,
    isDateOutOfMaxMonthRange,
  } = getDateCellConditions(props);

  if (isDateOutOfMinMonthRange || isDateOutOfMaxMonthRange) {
    return (
      <DateCellItem
        key={`${index.toString()}-${date}`}
        className={getClassNames(theme.dateCell, theme.dateCellDisabled)}
      >
        {date}
      </DateCellItem>
    );
  }

  if (isDateOfPrevMonth || isDateOfNextMonth) {
    const monthCell = isDateOfPrevMonth ? viewDate.getMonth() - 1 : viewDate.getMonth() + 1;

    return (
      <DateCellItem
        key={`${index.toString()}-${date}`}
        className={getClassNames(theme.dateCell, theme.dateCellDifferentMonth)}
        onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.DATES_SELECT, ev, { dateCell: date, monthCell })}
        title={formatDate(renderedDate, messages)}
      >
        {date}
      </DateCellItem>
    );
  }

  return (
    <DateCellItem
      key={`${index.toString()}-${date}`}
      className={getDateCellClassNames(props, renderedDate)}
      onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.DATES_SELECT, ev, { dateCell: date })}
      title={formatDate(renderedDate, messages)}
    >
      {date}
    </DateCellItem>
  );
};
