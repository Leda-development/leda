import { SetState } from "../../commonTypes";
import { RadioGroupProps } from "./types";

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