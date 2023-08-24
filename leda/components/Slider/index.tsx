'use client';

import React from 'react';
import { isNumber, isNil } from 'lodash';
import { Div } from '../Div';
import { Span } from '../Span';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SliderSrc } from '../../src/ReactSlider';
import {
  getClassNames, useTheme, useElement, useProps,
} from '../../utils';
import { LABELS } from './constants';
import { createAfterChangeHandler, createChangeHandler } from './handlers';
import { SliderLabels } from './SliderLabels';
import { SliderTooltip } from './SliderTooltip';
import type {
  SliderProps, SliderValue,
} from './types';

// Slider taken here:
// https://github.com/mpowaga/react-slider#readme

// The number of sliders depends on what is passed in value or defaultValue
// if a number is passed, the number of sliders will be one
// if an array is passed, the number of sliders will be equal to the number of elements in the array.

// The component can be used as controllable (via value, defaultValue is not used)
// and as uncontrollable (initial value is set via defaultValue)

export const Slider = React.forwardRef((props: SliderProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    labelType = LABELS.MINMAX,
    hasTooltip = false,
    className,
    unitsRender,
    max = 100,
    min = 0,
    name,
    defaultValue,
    isDisabled,
    minRange,
    onChange,
    onMove,
    step,
    theme: themeProp,
    value: valueProp,
  } = useProps(props);

  const [valueState, setValueState] = React.useState<SliderValue>(defaultValue || 0);

  const value = isNil(valueProp) ? valueState : valueProp;

  const sliderRef = React.useRef<InstanceType<typeof SliderSrc> | null>(null);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.slider);

  const shouldRenderMinMaxLabels = labelType === LABELS.MINMAX;

  const shouldRenderCurrentLabel = labelType === LABELS.CURRENT && (
    (Array.isArray(value) && value.length === 1) // An array of one element
      || isNumber(value) // or a number
  );

  const shouldRender = shouldRenderCurrentLabel || shouldRenderMinMaxLabels;

  const handleChange = createChangeHandler({ onMove, setValueState, name });

  const handleAfterChange = createAfterChangeHandler({ name, onChange });

  const Units = useElement(
    'Units',
    Span,
    unitsRender,
    props,
    { value: valueState },
  );

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  return (
    <Div
      className={wrapperClassNames}
      ref={ref}
    >
      <SliderSrc
        ref={sliderRef}
        className={theme.container}
        thumbClassName={theme.handle}
        trackClassName={theme.track}
        defaultValue={defaultValue}
        renderTrack={(elProps, elState) => {
          const isOneHandle = !Array.isArray(value) || value.length === 1;
          const isActive = isOneHandle ? elState.index === 0 : Array.isArray(value) && elState.index < value.length;
          return (
            <div {...elProps} className={getClassNames(theme.track, { [theme.trackActive]: isActive })} />
          );
        }}
        renderThumb={(elProps, elState) => (
          <div {...elProps}>
            <SliderTooltip
              shouldRender={hasTooltip}
              theme={theme}
              value={elState.valueNow}
              key={elState.index.toString()}
            />
          </div>
        )}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
        value={value}
        min={min}
        max={max}
        step={step}
        withTracks
        minDistance={minRange}
        disabled={isDisabled}
      />
      <SliderLabels
        shouldRender={shouldRender}
        type={labelType}
        theme={theme}
        min={min}
        max={max}
        value={value}
      >
        <Units />
      </SliderLabels>
    </Div>
  );
}) as React.FC<SliderProps>;

Slider.displayName = 'Slider';
