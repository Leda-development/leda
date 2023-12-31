'use client';

import React, { useContext } from 'react';
import { Div } from '../Div';
import {
  getClassNames, useElement, useProps, useTheme,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import type { ProgressBarProps } from './types';
import { Span } from '../Span';
import { LedaContext } from '../LedaProvider';

export const ProgressBar = React.forwardRef((props: ProgressBarProps, ref?: React.Ref<HTMLElement>) => {
  const {
    value,
    className,
    theme: themeProp,
    valueRender,
    ...restProps
  } = useProps(props);

  const width = `${value}%`;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.progressBar);

  const { renders: { progressBar: customRenders } } = useContext(LedaContext);

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  const Value = useElement(
    'Value',
    Span,
    valueRender ?? customRenders.valueRender,
    props,
  );

  return (
    <Div
      {...restProps}
      className={wrapperClassNames}
      ref={ref}
    >
      <div className={theme.fill} style={{ width }}>
        <Value data-value={value} className={theme.value}>
          {value > 10 && width}
        </Value>
      </div>
    </Div>
  );
}) as React.FC<ProgressBarProps>;

ProgressBar.displayName = 'ProgressBar';
