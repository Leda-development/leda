import * as React from 'react';
import {
  bindFunctionalRef, getClassNames, useTheme, useElement, generateId, useValue, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { createChangeHandler } from './handlers';
import { CheckBoxProps, CheckBoxRefCurrent } from './types';
import { LedaContext } from '../LedaProvider';
import { Div, Icon, IconTypes, Label } from '../../index';

export const CheckBox = React.forwardRef((props: CheckBoxProps, ref?: React.Ref<CheckBoxRefCurrent>): React.ReactElement => {
  const {
    checkedIcon,
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

  const labelClassNames = getClassNames(theme.label, className);

  const checkBoxId = id || `checkbox-${generateId()}`;

  const handleChange = createChangeHandler(props, setUncontrolledValue);

  return (
    <Wrapper
      ref={ref && ((component) => {
        const wrapper = component ? (component.wrapper || component as unknown as HTMLElement) : null;

        return bindFunctionalRef(component, ref, component && wrapper && {
          wrapper,
          input: wrapper.firstElementChild as HTMLInputElement,
          label: wrapper.firstElementChild ? wrapper.firstElementChild.nextElementSibling as HTMLLabelElement : null,
        });
      })}
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
        className={labelClassNames}
      >
        {value
          ? <Icon
              icon={checkedIcon || IconTypes.Icons.CheckSquare}
              className={theme.icon}
            />
          : <Icon
              icon={IconTypes.Icons.Square}
              className={theme.icon}
            />  
        }
        {children}
      </LabelElement>
    </Wrapper>
  );
}) as React.FC<CheckBoxProps>;

CheckBox.displayName = 'CheckBox';
