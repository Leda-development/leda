import * as React from 'react';
import { isNil, isDate } from 'lodash';
import { useValidation } from '../../components/Validation';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { getCalendarConditions } from '../CalendarBase/helpers';
import { Div } from '../../components/Div';
import {
  getClassNames, useProps, useTheme,
} from '../../utils';
import { CalendarBase } from '../CalendarBase';
import { COMPONENT_TYPES } from './constants';
import {
  createBlurHandler,
  createCalendarClickHandler,
  createCalendarIconMouseDownHandler,
  createCalendarMouseDownHandler,
  createChangeHandler,
  createFocusHandler,
  createKeyDownHandler,
  createResetHandler,
  handleErrors,
} from './handlers';
import {
  convertToDate,
  createMask,
  getInputWrapperClassNames, getValue, stringToDate,
} from './helpers';
import { useCustomElements, useDateTimeInputEffects, useDateTimeInputState } from './hooks';
import type { DateTimeInputProps } from './types';
import { IconTypes } from '../..';

export const DateTimeInput = React.forwardRef((props: DateTimeInputProps, ref: React.Ref<HTMLElement>) => {
  const {
    boundingContainerRef,
    calendarHeaderRender,
    calendarWrapperRender,
    className,
    dateCellRender,
    dateViewRender,
    format = 'dd.MM.yyyy',
    hasTodayButton,
    iconRender,
    inputRender,
    invalidMessage,
    invalidMessageRender,
    isDisabled,
    isOpen: isOpenProp,
    isRequired,
    isValid: isValidProp,
    max: maxProp,
    min: minProp,
    monthViewRender,
    name,
    onEnterPress,
    placeholder,
    requiredMessage,
    shouldValidateUnmounted,
    theme: themeProp,
    type = COMPONENT_TYPES.DATE_ONLY,
    validator,
    value: valueProp,
    weeksRowRender,
    wrapperRender,
    yearViewRender,
    ...restProps
  } = useProps(props);

  handleErrors(props);

  // Convert moment to Date, if moment was passed to props
  const min = React.useMemo(() => convertToDate(minProp), [minProp]);

  const max = React.useMemo(() => convertToDate(maxProp), [maxProp]);

  const newProps = { ...props, min, max };

  const [state, dispatch] = useDateTimeInputState(newProps);

  // Ref from maskedInput is used for validation and focus/blur
  const maskedInputRef = React.useRef<HTMLInputElement | null>(null);

  // conditions for processing calendar events (disabled dates, inactive arrows etc)
  const conditions = getCalendarConditions({
    min, max, viewDate: state.viewDate, viewType: state.viewType, value: state.date,
  });
  // validating Date instead of the string. E.g: "12.__.____" is not a valid date
  const validationValue = isDate(valueProp) || isNil(valueProp) ? valueProp : stringToDate(valueProp, format);

  const validationProps = React.useMemo(() => ({
    ...newProps,
    value: validationValue,
  }), [newProps, validationValue]);

  const validationState = React.useMemo(() => ({
    value: state.date,
  }), [state.date]);

  const {
    validateCurrent, isValid, InvalidMessage,
  } = useValidation(validationProps, validationState, {
    reset: createResetHandler({
      props, dispatch,
    }),
  });

  useDateTimeInputEffects({
    props: newProps, state, dispatch, conditions,
  });

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dateTimeInput);

  const mask = createMask(format, type);

  const isOpen = isNil(isOpenProp) ? state.isOpen : isOpenProp;

  const handlersData = {
    props: newProps, state, dispatch, maskedInputRef, validate: validateCurrent, conditions,
  };

  const handleBlur = createBlurHandler(handlersData);
  const handleCalendarIconMouseDown = createCalendarIconMouseDownHandler(handlersData);
  const handleCalendarKeyDown = createKeyDownHandler(handlersData);
  const handleCalendarMouseDown = createCalendarMouseDownHandler(handlersData);
  const handleCalendarClick = createCalendarClickHandler(handlersData);
  const handleChange = createChangeHandler(handlersData);
  const handleFocus = createFocusHandler(handlersData);

  const {
    Wrapper,
    Icon,
    Input,
  } = useCustomElements(props, state);

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  const inputValue = getValue({
    valueProp,
    valueState: state.value,
    dateState: state.date,
    format,
  });

  return (
    <Wrapper
      className={wrapperClassNames}
      onKeyDown={(ev) => handleCalendarKeyDown(ev)}
      ref={ref}
    >
      <Div
        className={getInputWrapperClassNames(theme, newProps, state, isValid)}
      >
        <Input
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          className={theme.input}
          isDisabled={isDisabled}
          mask={mask}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          ref={maskedInputRef}
          value={inputValue}
        />
          {type !== COMPONENT_TYPES.TIME_ONLY && (
            <Icon
              icon={IconTypes.Icons.Calendar}
              onMouseDown={handleCalendarIconMouseDown}
              className={theme.calendarIcon}
            />
          )}
      </Div>
      {!state.isFocused && !isDisabled && <InvalidMessage />}
      {type !== COMPONENT_TYPES.TIME_ONLY && (
        <CalendarBase
          boundingContainerRef={boundingContainerRef}
          calendarHeaderRender={calendarHeaderRender}
          dateCellRender={dateCellRender}
          dateViewRender={dateViewRender}
          dispatch={dispatch}
          format={format}
          hasTodayButton={hasTodayButton}
          isDisabled={isDisabled}
          isOpen={isOpen}
          max={max}
          min={min}
          monthViewRender={monthViewRender}
          onClick={handleCalendarClick}
          onMouseDown={handleCalendarMouseDown}
          theme={theme.calendar}
          value={state.date}
          viewDate={state.viewDate}
          viewType={state.viewType}
          weeksRowRender={weeksRowRender}
          yearViewRender={yearViewRender}
          calendarWrapperRender={calendarWrapperRender}
        />
      )}
    </Wrapper>
  );
});

DateTimeInput.displayName = 'DateTimeInput';
