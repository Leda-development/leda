import React from 'react';
import { isFunction } from 'lodash';
import { A } from '../A';
import { getClassNames } from '../../utils';
import type { PaginationControlProps } from './types';

export const PaginationControl = (props: PaginationControlProps): React.ReactElement => {
  const {
    onClick,
    page,
    className,
    isPageNumber,
    title,
    theme,
    children,
  } = props;

  const handlePageChange = React.useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    // Remove the focus, otherwise the frame on the selected element remains
    event.currentTarget.blur();
    if (isFunction(onClick) && page !== 0) onClick(page);
  }, [onClick, page]);

  const classNames = getClassNames(
    className,
    { [theme.disabled]: page === 0 },
  );

  return (
    <A
      className={classNames}
      onClick={handlePageChange}
      title={title}
      tabIndex={isPageNumber ? -1 : undefined}
    >
      {children}
    </A>
  );
};

PaginationControl.displayName = 'PaginationControl';
