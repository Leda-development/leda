import type { SetState } from '../../commonTypes';
import type { RadioGroupProps } from './types';

export const createResetHandler = (
  props: RadioGroupProps,
  setValue: SetState<string | number | null | undefined>,
) => () => {
  setValue(null);

  props.onChange?.({
    component: {
      name: props.name,
      value: null,
    },
  });
};
