import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface ChangeEvent {
  component: {
    value: number,
  },
}

export interface PageSizeChangeEvent {
  component: {
    value: number,
  },
}

export interface PaginationProps {
  /** Current page number */
  currentPage?: number,
  /** Initial number of elements on the page when passing pageSizeOptions. Defaults to the first element of the array */
  defaultPageSize?: number,
  /** Loading state, for this time all clicks are blocked */
  isLoading?: boolean,
  /** Info customizator */
  itemsInfoRender?: CustomRender<PaginationProps, PaginationState, PaginationInfoProps>,
  /** Range info text customizator */
  itemsRangeInfoRender?: CustomRender<PaginationProps, PaginationState, PaginationRangeInfoProps>,
  /** Total items info customizator */
  itemsTotalInfoRender?: CustomRender<PaginationProps, PaginationState, PaginationTotalInfoProps>,
  /** Page change handler */
  onChange?: (event: ChangeEvent) => void,
  /** Page size change handler */
  onPageSizeChange?: (event: PageSizeChangeEvent) => void,
  /** Page size dropdown customizator */
  pagesDropDownRender?: CustomRender<PaginationProps, PaginationState, PagesDropDownProps>,
  /** Number of items on the page */
  pageSize?: number,
  /** Selects options for the number of elements on the page, if passed, a drop-down list appears */
  pageSizeOptions?: number[],
  /** Reference */
  ref?: React.Ref<HTMLElement>,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
  /** Totl number of items */
  totalItems: number,
  /** _css-class-names */
  [x: string]: unknown,
}

export interface PaginationState {
  currentPage: number,
  pageSize: number,
}

export interface PagesDropDownProps {
  /** Handling selection of items in the drop-down list */
  handlePageSizeChange: (event: PageSizeChangeEvent) => void,
  /** Is it possible to change the number of elements on the page */
  isPageSizeChangeable: boolean,
  /** Number of elements on the page */
  pageSize: number,
  /** Options for the number of elements on the page */
  pageSizeOptions?: number[],
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
}

export interface PaginationInfoProps {
  children?: React.ReactNode,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
}

export interface PaginationRangeInfoProps {
  startingItemNumber: number,
  endingItemNumber: number,
  totalItemsNumber: number,
}

export interface PaginationTotalInfoProps {
  totalItemsNumber: number,
}

export interface PaginationControlProps {
  className?: string,
  children?: React.ReactNode,
  isPageNumber?: boolean,
  onClick: PageChangeHandler,
  page: number,
  title?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
}

export interface PageChangeHandler {
  (pageNumber: number): void,
}

export interface PagesListProps {
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
  pageNumbers: number[],
  currentPage: number,
  onClick: PageChangeHandler,
}

export interface CustomElements {
  ItemsInfo: React.FC<PaginationInfoProps>,
  ItemsRangeInfo: React.FC<PaginationRangeInfoProps>,
  ItemsTotalInfo: React.FC<PaginationTotalInfoProps>,
  PagesDropDown: React.FC<PagesDropDownProps>,
}
