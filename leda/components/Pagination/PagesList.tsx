import * as React from 'react';
import { getClassNames } from '../../utils';
import { Li } from '../Li';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { PaginationControl } from './PaginationControl';
import { PagesListProps } from './types';

export const PagesList = (props: PagesListProps): React.ReactElement => {
  const {
    theme,
    pageNumbers,
    currentPage,
    onClick,
  } = props;

  return (
    <Ul className={theme.numberButtons}>
      {pageNumbers.map((page) => {
        const isCurrentPage = page === currentPage; // may not be executed for one element in controlled mode

        const classNames = getClassNames(
          theme.button,
          theme.numberSelected,
          { [theme.disabled]: pageNumbers.length === 1 });

        return (
          <Li key={page}>
            {isCurrentPage
              ? <Span className={classNames}>{page}</Span>
              : (
                <PaginationControl
                  className={theme.button}
                  page={pageNumbers.length === 1 ? 0 : page} // this condition should never be met, but "foolproof"
                  isPageNumber
                  onClick={onClick}
                  theme={theme}
                >
                  {page}
                </PaginationControl>
              )}
          </Li>
        );
      })}
    </Ul>
  );
};
