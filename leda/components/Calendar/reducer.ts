import { StandaloneCalendarActionTypes, StandaloneCalendarState } from './types';
import { stateActionTypes } from '../../src/DateTimeInput/actions';

export const stateReducer = (state: StandaloneCalendarState, action: StandaloneCalendarActionTypes): StandaloneCalendarState => {
  switch (action.type) {
    case stateActionTypes.SET_DATE: {
      return { ...state, date: action.payload };
    }
    case stateActionTypes.SET_VIEW_DATE: {
      return { ...state, viewDate: action.payload };
    }
    case stateActionTypes.SET_VIEW_TYPE: {
      return { ...state, viewType: action.payload };
    }
    default:
  }

  return state;
};
