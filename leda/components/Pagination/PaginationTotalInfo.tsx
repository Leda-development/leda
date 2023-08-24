import type * as React from 'react';
import type { PaginationTotalInfoProps } from './types';

export const PaginationTotalInfo = (props: PaginationTotalInfoProps): React.ReactElement => {
  const {
    totalItemsNumber,
  } = props;

  return `Total: ${totalItemsNumber}` as unknown as React.ReactElement;
};
