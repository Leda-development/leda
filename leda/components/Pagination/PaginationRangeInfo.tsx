import type * as React from 'react';
import type { PaginationRangeInfoProps } from './types';

export const PaginationRangeInfo = (props: PaginationRangeInfoProps): React.ReactElement => {
  const {
    msg,
    startingItemNumber,
    endingItemNumber,
    totalItemsNumber,
  } = props;

  return `${startingItemNumber} - ${endingItemNumber} ${msg.outOf} ${totalItemsNumber}` as unknown as React.ReactElement;
};
