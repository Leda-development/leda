import { isFunction } from 'lodash';
import { setFocused } from '../actions';
import type {
  HandlersData,
} from '../types';
import type { FocusEvent } from '../../MaskedInputBase/types';

export const createFocusHandler = ({ props, state, dispatch }: HandlersData) => (ev: FocusEvent): void => {
  const { onFocus, name } = props;
  const { date } = state;

  dispatch(setFocused(true));

  if (isFunction(onFocus)) {
    onFocus({
      ...ev,
      component: {
        name,
        date,
        value: ev.component.value,
      },
    });
  }
};
