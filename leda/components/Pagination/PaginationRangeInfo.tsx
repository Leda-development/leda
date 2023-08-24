import type * as React from 'react';
import type { PaginationRangeInfoProps } from './types';

export const PaginationRangeInfo = (props: PaginationRangeInfoProps): React.ReactElement => {
  const {
    startingItemNumber,
    endingItemNumber,
    totalItemsNumber,
  } = props;

  return `${startingItemNumber} - ${endingItemNumber} из ${totalItemsNumber}` as unknown as React.ReactElement;
};
