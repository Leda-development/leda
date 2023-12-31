import type * as React from 'react';
import { VIEW_TYPES } from '../../CalendarBase/constants';
import { setOpen, setViewType } from '../actions';
import type { HandlersData } from '../types';

export const createCalendarIconMouseDownHandler = ({
  dispatch,
  maskedInputRef,
  props,
  state,
}: HandlersData) => (ev: React.MouseEvent<SVGElement>): void => {
  const { isDisabled } = props;
  const {
    isOpen,
  } = state;

  if (isDisabled) return;

  ev.preventDefault();
  ev.stopPropagation();

  if (!isOpen) {
    dispatch(setViewType(VIEW_TYPES.DATES));

    dispatch(setOpen(true));
  } else dispatch(setOpen(false));

  setTimeout(() => {
    if (maskedInputRef.current) maskedInputRef.current.focus();
  }, 0);
};

export const createCalendarMouseDownHandler = ({ maskedInputRef }: HandlersData) => (ev: React.MouseEvent<HTMLDivElement>): void => {
  ev.preventDefault();

  if (maskedInputRef.current) maskedInputRef.current.focus();
};
