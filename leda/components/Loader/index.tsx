'use client';

import React, { useEffect } from 'react';
import {
  getClassNames, useTheme, useElement, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import type { IconProps, LoaderProps } from './types';
import { Div } from '../Div';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const Loader = React.forwardRef((props: LoaderProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    children,
    className,
    iconRender,
    isGlobal,
    isLoading = true,
    size,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.loader);

  const wrapperClassName = getClassNames(
    className,
    [theme.wrapper],
    { [theme.fullscreen]: isGlobal },
  );

  useEffect(() => {
    if (isLoading && isGlobal) {
      document.body.classList.add(theme.bodyOverflow);
    }

    return () => {
      if (isGlobal) {
        document.body.classList.remove(theme.bodyOverflow);
      }
    };
  }, [isLoading, isGlobal, theme.bodyOverflow]);

  const IconElement = useElement<LoaderProps, {}, IconProps>(
    'Icon',
    Icon,
    iconRender,
    props,
  );

  if (isGlobal) {
    return (isLoading && (
      <Div
        {...restProps}
        ref={ref}
        className={wrapperClassName}
      >
        <Icon icon={IconTypes.Icons.Loader} className={theme.element} />
      </Div>
    )) as unknown as React.ReactElement;
  }

  return (
    <Div
      {...restProps}
      ref={ref}
      className={wrapperClassName}
    >
      {isLoading && (
        <div
          className={theme.container}
        >
          <IconElement icon={IconTypes.Icons.Loader} className={theme.element} />
        </div>
      )}
      {children}
    </Div>
  );
}) as React.FC<LoaderProps>;

Loader.displayName = 'Loader';
