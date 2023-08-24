import React from 'react';
import {
  getClassNames, useElement, useProps,
} from '../../utils';
import { generateId } from '../../utils/generateId';
import { Div } from '../Div';
import type { PropsFromParent, RadioButtonProps } from './types';
import { globalDefaultTheme } from '../LedaProvider';

export const RadioButton = React.forwardRef((props: RadioButtonProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    children,
    className,
    isChecked,
    id = generateId(),
    isDisabled,
    theme = globalDefaultTheme.radio,
    wrapperRender,
    onChange,
    value,
    name,
    ...restProps
  } = useProps(props as RadioButtonProps & PropsFromParent);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
  );

  const handleChange = React.useCallback((ev) => {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
      },
    };

    return onChange(customEvent);
  }, [onChange, value, name]);

  const wrapperClassNames = getClassNames(
    theme.item,
    className,
  );

  const labelClassNames = getClassNames(
    theme.label,
    className,
  );

  return (
    <Wrapper
      {...restProps}
      className={wrapperClassNames}
      ref={ref}
    >
      <input
        checked={isChecked}
        className={theme.input}
        disabled={isDisabled}
        id={id}
        value={value}
        type="radio"
        onChange={handleChange}
      />
      <label
        className={labelClassNames}
        htmlFor={id}
        title={props.title}
      >
        {children}
      </label>
    </Wrapper>
  );
}) as React.FC<RadioButtonProps>;

RadioButton.displayName = 'RadioButton';
