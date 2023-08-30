import * as React from 'react';
import { Div } from '../../components/Div';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import {
  getMonthName,
  getMonthYearArray, getShortMonthName,
} from './helpers';
import { getClassNames } from '../../utils';
import type { MonthViewProps } from './types';
import { useMessages } from '../../utils/useMessages';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const MonthView = (props: MonthViewProps): React.ReactElement | null => {
  const {
    min, max, viewDate, theme, onClick, viewType, ...restProps
  } = props;

  const messages = useMessages({
    fieldName: COMPONENTS_NAMESPACES.calendar,
  });

  if (viewType !== VIEW_TYPES.MONTHS) return null;

  const monthArray = getMonthYearArray();

  return (
    <Div
      className={theme.monthView}
      {...restProps}
    >
      {
        monthArray.map((monthRow, index) => (
          <Div
            className={theme.monthRow}
            key={`month-row-${index.toString()}`}
          >
            {monthRow.map((monthCell) => {
              const isLessThanMin = min && monthCell < min.getMonth() && viewDate.getFullYear() === min.getFullYear();
              const isGreaterThanMax = max && monthCell > max.getMonth() && viewDate.getFullYear() === max.getFullYear();

              if (isLessThanMin || isGreaterThanMax) {
                return (
                  <Div
                    key={`month-cell-${monthCell}`}
                    className={getClassNames(
                      theme.monthCell,
                      theme.monthCellDisabled,
                    )}
                  >
                    {getShortMonthName(monthCell, messages)}
                  </Div>
                );
              }

              return (
                <Div
                  key={`month-cell-${monthCell}`}
                  className={getClassNames(
                    theme.monthCell,
                    { [theme.monthCellActive]: viewDate.getMonth() === monthCell },
                  )}
                  onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.MONTHS_SELECT, ev, { monthCell })}
                  title={getMonthName(monthCell, messages)}
                >
                  {getShortMonthName(monthCell, messages)}
                </Div>
              );
            })}
          </Div>
        ))
      }
    </Div>
  );
};
