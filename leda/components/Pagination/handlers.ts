import { isFunction } from 'lodash';
import type { CustomEventHandler, SetState } from '../../commonTypes';
import type { ChangeEvent, PageChangeHandler, PageSizeChangeEvent } from './types';

export const createPageChangeHandler = (
  currentPage: number,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  isLoading: boolean,
  setCurrentPageState: SetState<number>,
): PageChangeHandler => (pageNumber: number): void => {
  // block page changes during loading until the new currentPage value comes to props
  if (!isLoading) {
    setCurrentPageState(pageNumber);

    if (isFunction(onChange)) {
      const newEvent = { component: { value: pageNumber } };

      onChange(newEvent);
    }
  }
};

export const createPageSizeChangeHandler = (
  onPageSizeChange: CustomEventHandler<PageSizeChangeEvent> | undefined,
  totalItems: number,
  currentPage: number,
  setPageSizeState: SetState<number>,
  setCurrentPageState: SetState<number>,
): CustomEventHandler<PageSizeChangeEvent> => (event) => {
  const { value } = event.component;

  if (value == null || value === 0) {
    setPageSizeState(totalItems);
  } else {
    const newTotalPages = Math.ceil(totalItems / value);

    if (currentPage > newTotalPages) {
      setCurrentPageState(newTotalPages);
    }

    setPageSizeState(value);
  }

  if (isFunction(onPageSizeChange)) {
    onPageSizeChange(event);
  }
};
