'use client';

import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, useProps, useTheme,
} from '../../utils';
import type { RatingProps } from './types';
import { createChangeHandler, createMouseOutHandler, createMouseOverHandler } from './handlers';
import { Span } from '../Span';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const Rating = React.forwardRef((props: RatingProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    max = 5,
    icon = IconTypes.Icons.Star,
    onChange,
    value,
    className,
    isDisabled,
    onClick,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.rating);

  const [currentSelected, setCurrentSelected] = React.useState<number>(-1);

  React.useEffect(() => {
    if (value !== currentSelected) setCurrentSelected(value - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = createChangeHandler(props);

  const handleMouseOut = createMouseOutHandler(value, setCurrentSelected);

  const handleMouseOver = createMouseOverHandler(setCurrentSelected);

  const starsArray = [...Array(max)];

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  return (
    <Span
      className={wrapperClassNames}
      onMouseOver={!isDisabled ? handleMouseOver : undefined}
      onMouseOut={!isDisabled ? handleMouseOut : undefined}
      onClick={!isDisabled ? handleChange : onClick}
      ref={ref}
      {...restProps}
    >
      {
        starsArray.map((_, index) => {
          const fillToIndex = onChange ? currentSelected : value - 1;
          const isFilled = fillToIndex >= index;

          const iconClassNames = getClassNames(theme.item, {
            [theme.itemFilled]: isFilled,
            [theme.disabled]: isDisabled,
          });

          return (
            <Icon
              icon={icon}
              className={iconClassNames}
              key={index.toString()}
            />
          );
        })
      }
    </Span>
  );
}) as React.FC<RatingProps>;

Rating.displayName = 'Rating';
