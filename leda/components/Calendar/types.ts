import type * as React from 'react';
import type { Action, CustomRender, Values } from '../../commonTypes';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type {
  CalendarConditions,
  CalendarHeaderProps,
  DateViewProps,
  MonthViewProps,
  YearViewProps,
} from '../../src/CalendarBase/types';
import type { VIEW_TYPES } from '../../src/CalendarBase/constants';
import type { stateActionTypes } from '../../src/DateTimeInput/actions';
import type { DivProps } from '../Div';

export interface ChangeEvent extends React.MouseEvent {
  component: {
    value: Date,
    name?: string,
  },
}

export interface StandaloneCalendarProps {
  /** "Today" button */
  hasTodayButton?: boolean,
  /** Max available date */
  max?: Date,
  /** Min available date */
  min?: Date,
  /** Component name (is used in forms) */
  name?: string,
  /** Change handler */
  onChange: (event: ChangeEvent) => void,
  /** React Ref */
  ref?: React.Ref<HTMLElement>,
  /** Component theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.calendar],
  /** Currently selected date */
  value?: Date,
  /** Customization */
  dateViewRender?: CustomRender<StandaloneCalendarProps, Record<string, never>, DateViewProps>,
  headerRender?: CustomRender<StandaloneCalendarProps, Record<string, never>, CalendarHeaderProps>,
  monthViewRender?: CustomRender<StandaloneCalendarProps, Record<string, never>, MonthViewProps>,
  wrapperRender?: CustomRender<StandaloneCalendarProps, Record<string, never>, DivProps>,
  yearViewRender?: CustomRender<StandaloneCalendarProps, Record<string, never>, YearViewProps>,
  /** Class names passed with _ */
  [x: string]: unknown,
}

export type StandaloneCalendarActionTypes = Action<typeof stateActionTypes.SET_VIEW_DATE, Date>
| Action<typeof stateActionTypes.SET_VIEW_TYPE, Values<typeof VIEW_TYPES>>
| Action<typeof stateActionTypes.SET_DATE, Date | null>;

export interface StandaloneCalendarState {
  date: Date | null, // selected date
  viewDate: Date, // highlighted date
  viewType: Values<typeof VIEW_TYPES>,
}

export interface CreateChangeHandlerParams {
  conditions: CalendarConditions,
  props: StandaloneCalendarProps,
  state: StandaloneCalendarState,
  dispatch: React.Dispatch<StandaloneCalendarActionTypes>,
}
