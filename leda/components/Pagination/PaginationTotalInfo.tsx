import * as React from 'react';
import { PaginationTotalInfoProps } from './types';

export const PaginationTotalInfo = (props: PaginationTotalInfoProps): React.ReactElement => {
  const {
    totalItemsNumber,
  } = props;

  return `Total: ${totalItemsNumber}` as unknown as React.ReactElement;
};
