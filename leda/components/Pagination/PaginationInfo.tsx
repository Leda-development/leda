import * as React from 'react';
import { Span } from '../Span';
import type { PaginationInfoProps } from './types';

export const PaginationInfo = (props: PaginationInfoProps): React.ReactElement => {
  const {
    theme,
    children,
  } = props;

  return (
    <Span className={theme.infoLabel}>
      {children}
    </Span>
  );
};
