import React from 'react';
import { isFunction, isBoolean } from 'lodash';
import { RadioButton } from './RadioButton';
import {
  getClassNames, useTheme, useElement, useProps,
} from '../../utils';
import { Div } from '../Div';
import { COMPONENTS_NAMESPACES } from '../../constants';
import type {
  ChangeEvent, RadioGroupProps, WrapperProps,
} from './types';
import { createResetHandler } from './handlers';
import { useValidation } from '../Validation';

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    children,
    className,
    name,
    onChange,
    value: valueProp,
    wrapperRender,
    isDisabled,
  } = useProps(props);

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.radio);

  const [valueState, setValueState] = React.useState<string | number | undefined | null>();

  const value = valueProp === undefined ? valueState : valueProp;

  const { isValid, InvalidMessage } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler(props, setValueState),
  });

  const combinedClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const handleChange = React.useCallback((ev: ChangeEvent) => {
    if (isFunction(onChange)) onChange(ev);

    return setValueState(ev.component.value);
  }, [onChange]);

  const Wrapper = useElement<RadioGroupProps, { value?: string | number | null }, WrapperProps>(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    { value: valueState },
  );

  return (
    <Wrapper
      className={combinedClassNames}
      ref={ref}
    >
      {React.Children.toArray(children).map((child) => {
        if (child
          && React.isValidElement(child)
          && (child.type === RadioButton || (child.type as { name?: string }).name === 'RadioButton')
        ) {
          return React.cloneElement(child, {
            name,
            onChange: handleChange,
            isDisabled: isBoolean(isDisabled) ? isDisabled : child.props.isDisabled,
            isChecked: child.props.value === value,
            theme: { ...theme, ...child.props.theme },
          // todo find a better way to fix TS issue with the name property
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any);
        }
        return child;
      })}
      {!isValid && <InvalidMessage />}
    </Wrapper>
  );
}) as React.FC<RadioGroupProps>;

RadioGroup.displayName = 'RadioGroup';
