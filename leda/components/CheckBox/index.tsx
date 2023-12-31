import * as React from 'react';
import classnames from 'classnames';
import {
  useTheme, useElement, generateId, useValue, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { createChangeHandler } from './handlers';
import type { CheckBoxProps } from './types';
import { LedaContext } from '../LedaProvider';
import {
  Div, Icon, IconTypes, Label,
} from '../../index';

export const CheckBox = React.forwardRef((props: CheckBoxProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    checkboxIcon,
    children,
    className,
    defaultValue = false,
    id,
    inputRender,
    isDisabled,
    labelRender,
    name,
    onChange,
    theme: themeProp,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = useProps(props);

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.checkBox);

  const [value, setUncontrolledValue] = useValue(valueProp, defaultValue);

  const { renders: { [COMPONENTS_NAMESPACES.checkBox]: checkBoxRenders } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || checkBoxRenders.wrapperRender,
    props,
  );

  const LabelElement = useElement(
    'Label',
    Label,
    labelRender || checkBoxRenders.labelRender,
    props,
  );

  const Input = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender || checkBoxRenders.inputRender,
    props,
  );

  const checkBoxId = id || `checkbox-${generateId()}`;

  const handleChange = createChangeHandler(props, setUncontrolledValue);

  const classNames = classnames(
    theme.icon,
    value ? theme.iconChecked : theme.iconUnchecked,
  );

  return (
    <Wrapper
      ref={ref}
      className={className}
    >
      <Input
        {...restProps}
        id={checkBoxId}
        onChange={handleChange}
        type="checkbox"
        name={name}
        className={theme.input}
        disabled={isDisabled}
        checked={value}
      />
      <LabelElement
        htmlFor={checkBoxId}
        className={theme.label}
      >
        <Icon
          icon={(() => {
            if (checkboxIcon) return checkboxIcon;
            return value
              ? IconTypes.Icons.CheckSquare
              : IconTypes.Icons.Square;
          })()}
          className={classNames}
        />
        {children}
      </LabelElement>
    </Wrapper>
  );
}) as React.FC<CheckBoxProps>;

CheckBox.displayName = 'CheckBox';
