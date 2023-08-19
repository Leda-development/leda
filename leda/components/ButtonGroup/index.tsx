import * as React from 'react';
import { Div } from '../Div';
import { Button as DefaultButton } from '../Button';
import {
  getClassNames, useTheme, useValue, useElement, useProps, getIsEmptyAndRequired,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { createChangeHandler, createResetHandler } from './handlers';
import { compareItems } from './helpers';
import {
  ButtonGroupProps, Value,
} from './types';
import { useValidation } from '../Validation';
import { SomeObject } from '../../commonTypes';

export const ButtonGroup = React.forwardRef((props: ButtonGroupProps, ref?: React.Ref<HTMLElement>): React.ReactElement | null => {
  const {
    activeIndex,
    buttonRender,
    className,
    data,
    defaultValue,
    isDisabled,
    name,
    onChange,
    onClick,
    textField,
    theme: themeProp,
    value: valueProp,
    wrapperRender,
    isValid: isValidProp,
    isRequired,
    invalidMessage,
    invalidMessageRender,
    requiredMessage,
    shouldValidateUnmounted,
    form,
    validator,
    ...restProps
  } = useProps(props);

  const [value, setUncontrolledValue] = useValue(valueProp, defaultValue);

  const { isValid, validateCurrent, InvalidMessage } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler({
      props, setUncontrolledValue, value: defaultValue,
    }),
  });

  const handleChange = createChangeHandler(props, {
    value,
    setUncontrolledValue,
    validateCurrent,
  });

  const isEmptyAndRequired = getIsEmptyAndRequired(value, isRequired);

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.buttonGroup);

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  const buttonsWrapperClassNames = getClassNames(theme.buttonsWrapper, { [theme.wrapperDisabled]: isDisabled, [theme.wrapperRequired]: isEmptyAndRequired });

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
  );

  const Button = useElement(
    'Button',
    DefaultButton,
    buttonRender,
    props,
  );

  if (!data) return null;

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref}
      {...restProps}
    >
      <Div
        className={buttonsWrapperClassNames}
        aria-invalid={!isValid}
        data-form={form}
        role="group"
      >
        {(data as (string | number | SomeObject)[]).map((item, index) => {
          const combinedClassNames = getClassNames(
            theme.button,
            {
              [theme.buttonActive]: Array.isArray(value)
                ? (value as (string | number | SomeObject)[]).find((val) => compareItems(val, item, textField))
                : compareItems(value, item, textField),
            },
            { [theme.buttonFirst]: index === 0 },
            { [theme.buttonLast]: index === data.length - 1 },
          );

          const buttonText = (() => {
            if (typeof(textField) === 'string') {
              if (typeof(item) === 'object') return item[textField];
            }

            return item.toString();
          })();    

          return (
            <Button
              key={buttonText}
              onClick={handleChange(item)}
              className={combinedClassNames}
            >
              {buttonText}
            </Button>
          );
        })}
      </Div>
      <InvalidMessage />
    </Wrapper>
  );
}) as <T extends Value | Value[]>(props: ButtonGroupProps<T>) => React.ReactElement;


(ButtonGroup as React.FC<ButtonGroupProps>).displayName = 'ButtonGroup';
