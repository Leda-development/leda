'use client';

import * as React from 'react';
import { isNil } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { createPageChangeHandler, createPageSizeChangeHandler } from './handlers';
import { getPageNumbers, normalizePageNumber } from './helpers';
import { useCustomElements } from './hooks';
import { PagesList } from './PagesList';
import { PaginationControl } from './PaginationControl';
import type { PaginationProps } from './types';
import { Icon } from '../Icon';
import { IconTypes } from '../..';
import { useMessages } from '../../utils/useMessages';

export const Pagination = React.forwardRef((props: PaginationProps, ref: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    className,
    theme: themeProp,
    pageSize: pageSizeProp,
    defaultPageSize,
    currentPage: currentPageProp,
    pageSizeOptions,
    totalItems = 0,
    isLoading = false,
    messages,
    onChange,
    onPageSizeChange,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.pagination);

  const [currentPageState, setCurrentPageState] = React.useState<number>(1);

  const [pageSizeState, setPageSizeState] = React.useState<number>(defaultPageSize || (pageSizeOptions && pageSizeOptions[0]) || 10);

  const currentPage = isNil(currentPageProp) ? currentPageState : currentPageProp;

  const pageSize = isNil(pageSizeProp) ? pageSizeState : pageSizeProp;

  const pages = Math.ceil(totalItems / pageSize) || 1; // to avoid processing "0"

  const isPageSizeChangeable = !!pageSizeOptions;

  // If the number of pages = 0 or 1, we display pagination with disabled controls
  const isSinglePage = pages === 1;

  const isFirstPage = currentPage === 1;

  const isLastPage = currentPage === pages;
  // calculate the page number to go left
  const previousBlock = normalizePageNumber(currentPage - 5, totalItems, pageSize);
  // calculate the page number to go right
  const nextBlock = normalizePageNumber(currentPage + 5, totalItems, pageSize);

  const pagesArray = getPageNumbers(currentPage, pages, totalItems, pageSize);

  const isFirstPageShown = currentPage <= 3 || pages <= 5;

  const isLastPageShown = currentPage >= (pages - 2) || pages <= 5;

  // numbers of displayed records in the list
  const itemsFrom = currentPage === 1
    ? 1
    : ((currentPage - 1) * pageSize) + 1;

  const itemsTo = (currentPage * pageSize) <= totalItems
    ? (currentPage * pageSize)
    : totalItems;

  const handlePageChange = createPageChangeHandler(currentPage, onChange, isLoading, setCurrentPageState);

  const handlePageSizeChange = createPageSizeChangeHandler(onPageSizeChange, totalItems, currentPage, setPageSizeState, setCurrentPageState);

  const {
    ItemsInfo,
    ItemsTotalInfo,
    ItemsRangeInfo,
    PagesDropDown,
  } = useCustomElements(props, { currentPage: currentPageState, pageSize: pageSizeState });

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const msg = useMessages({ fieldName: COMPONENTS_NAMESPACES.pagination, messages });

  return (
    <Div
      className={wrapperClassNames}
      ref={ref}
    >
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlFirst,
        )}
        theme={theme}
        title={msg.titleFirst}
        page={isSinglePage || isFirstPage ? 0 : 1}
        onClick={handlePageChange}
      >
        <Icon
          icon={IconTypes.Icons.ChevronsLeft}
          className={theme.iconFirst}
        />
      </PaginationControl>
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlPrev,
        )}
        theme={theme}
        title={msg.titlePrevious}
        page={isSinglePage || isFirstPage ? 0 : currentPage - 1}
        onClick={handlePageChange}
      >
        <Icon
          icon={IconTypes.Icons.ChevronLeft}
          className={theme.iconPrev}
        />
      </PaginationControl>
      { !isFirstPageShown && (
      <PaginationControl
        className={theme.button}
        theme={theme}
        isPageNumber
        page={previousBlock}
        title={msg.titleDotsPrevious}
        onClick={handlePageChange}
      >
        ...
      </PaginationControl>
      )}
      <PagesList
        theme={theme}
        pageNumbers={pagesArray}
        currentPage={currentPage}
        onClick={handlePageChange}
      />
      { !isLastPageShown && (
      <PaginationControl
        className={theme.button}
        theme={theme}
        isPageNumber
        page={nextBlock}
        title={msg.titleDotsNext}
        onClick={handlePageChange}
      >
        ...
      </PaginationControl>
      )}
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlNext,
        )}
        theme={theme}
        page={isSinglePage || isLastPage ? 0 : currentPage + 1}
        title={msg.titleNext}
        onClick={handlePageChange}
      >
        <Icon
          icon={IconTypes.Icons.ChevronRight}
          className={theme.iconNext}
        />
      </PaginationControl>
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlLast,
        )}
        theme={theme}
        page={isSinglePage || isLastPage ? 0 : pages}
        title={msg.titleLast}
        onClick={handlePageChange}
      >
        <Icon
          icon={IconTypes.Icons.ChevronsRight}
          className={theme.iconLast}
        />
      </PaginationControl>
      <PagesDropDown
        handlePageSizeChange={handlePageSizeChange}
        isPageSizeChangeable={isPageSizeChangeable}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        theme={theme}
        msg={msg}
      />
      <ItemsInfo
        theme={theme}
      >
        {!isSinglePage
          ? (
            <ItemsRangeInfo
              startingItemNumber={itemsFrom}
              endingItemNumber={itemsTo}
              totalItemsNumber={totalItems}
              msg={msg}
            />
          )
          : (
            <ItemsTotalInfo
              totalItemsNumber={totalItems}
            />
          )}
      </ItemsInfo>
    </Div>
  );
}) as React.FC<PaginationProps>;

Pagination.displayName = 'Pagination';
