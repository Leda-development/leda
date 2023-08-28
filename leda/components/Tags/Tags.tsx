/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
// An element with interactive access has at least one keyboard event listener (we don't need it)
// Static HTML element with event handler requires the role of
import * as React from 'react';
import { isString } from 'lodash';
import {
  getClassNames, useTheme, useElement, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import type { TagsProps } from './types';

export const Tags = React.forwardRef((props: TagsProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    children,
    className,
    wrapperRender,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const { renders: { [COMPONENTS_NAMESPACES.tags]: tagsRenders } } = React.useContext(LedaContext);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.tags);

  const combinedClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || tagsRenders.wrapperRender,
    props,
  );

  return (
    <Wrapper
      className={combinedClassNames}
      {...restProps}
      ref={ref}
    >
      {
        isString(children)
          ? children
          : React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { theme } as object) : child))
      }
    </Wrapper>
  );
}) as React.FC<TagsProps>;

Tags.displayName = 'Tags';
