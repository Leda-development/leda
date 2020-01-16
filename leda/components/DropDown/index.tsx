import * as React from 'react';
import {
  bindFunctionalRef, mergeClassNames, getClassNames, useTheme, useElement,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DropDownProps, DropDownRefCurrent, WrapperProps } from './types';
import { Span } from '../Span';
import { LedaContext } from '../Leda';

export const DropDown = React.forwardRef((props: DropDownProps, ref?: React.Ref<DropDownRefCurrent>): React.ReactElement => {
  const {
    children,
    className,
    wrapperRender,
    theme: themeProp,
    ...restProps
  } = mergeClassNames(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dropDown);

  const combinedClassNames = getClassNames([theme.wrapper], className);

  const context = React.useContext(LedaContext);

  const Wrapper = useElement<DropDownProps, {}, WrapperProps>(
    'Wrapper',
    Span,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.dropDown].wrapperRender,
    props,
  );

  return (
    <Wrapper
      className={combinedClassNames}
      {...restProps}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper || component,
      }))}
    >
      {children}
    </Wrapper>
  );
}) as React.FC<DropDownProps>;

DropDown.displayName = 'DropDown';
