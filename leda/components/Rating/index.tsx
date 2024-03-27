'use client';

import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, useProps, useTheme, useValue,
} from '../../utils';
import type { RatingProps, RatingValue } from './types';
import { createChangeHandler, createMouseOutHandler, createMouseOverHandler, createResetHandler } from './handlers';
import { Span } from '../Span';
import { Icon } from '../Icon';
import { Div, IconTypes } from '../..';
import { useValidation } from '../Validation';
import { isNil } from 'lodash';


export const Rating = React.forwardRef((props: RatingProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    defaultValue = 0,
    max = 5,
    icon = IconTypes.Icons.Star,
    iconProps,
    onChange,
    value: valueProp,
    className,
    isDisabled,
    onClick,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.rating);

  const [value, setUncontrolledValue] = useValue<RatingValue>(valueProp, defaultValue);

  const [currentSelected, setCurrentSelected] = React.useState<RatingValue>(-1);

  const { isValid, InvalidMessage, validateCurrent } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler(props, setUncontrolledValue),
  });

  React.useEffect(() => {
    if (value !== currentSelected) setCurrentSelected((value ?? 0) - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = createChangeHandler(props, { setUncontrolledValue, value });

  const handleMouseOut = createMouseOutHandler(value, setCurrentSelected);

  const handleMouseOver = createMouseOverHandler(setCurrentSelected);

  const starsArray = [...Array(max)];

  const wrapperClassNames = getClassNames(className, theme.wrapper, {
    [theme.invalid]: !isValid,
  });
  
  return (
    <>
      <Span
        className={wrapperClassNames}
        ref={ref}
        {...restProps}
      >
        {
          starsArray.map((_, index) => {
            const fillToIndex = currentSelected;
            const isFilled = isNil(fillToIndex) ? false : fillToIndex >= index;

            const iconClassNames = getClassNames(theme.item, {
              [theme.itemFilled]: isFilled,
              [theme.disabled]: isDisabled,
            });

            const iconWrapperClassNames = getClassNames(theme.itemWrapper, {
              [theme.itemFilled]: isFilled,
              [theme.disabled]: isDisabled,
            });

            return (
              <Div
                // todo: use non-index key
                // eslint-disable-next-line react/no-array-index-key
                key={index.toString()}
                onMouseEnter={!isDisabled ? handleMouseOver : undefined}
                onMouseLeave={!isDisabled ? handleMouseOut : undefined}
                onClick={!isDisabled ? handleChange : onClick}
                className={iconWrapperClassNames}
              >
                <Icon
                  icon={icon}
                  className={iconClassNames}
                  {...iconProps}
                />
              </Div>
            );
          })
        }
      </Span>
      {!isValid && (
        <InvalidMessage />
      )}
    </>
  );
}) as React.FC<RatingProps>;

Rating.displayName = 'Rating';
