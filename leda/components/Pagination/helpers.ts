// if the calculated page number is out of range, then 1 or the last page number is returned
export const normalizePageNumber = (pageNumber: number, totalItems: number, pageSize: number): number => {
  const pages = Math.ceil(totalItems / pageSize);

  if (pageNumber < 1) {
    return 1;
  }

  if (pageNumber > pages) {
    return pages;
  }

  return pageNumber;
};

// Creates an array of displayed page numbers
export const getPageNumbers = (currentPage: number, totalPages: number, totalItems: number, pageSize: number): number[] => {
  // Returns an array with a single item 1 if totalItems = 0
  if (totalPages === 1) return [totalPages];
  // from the current page 2 pages on the left and 2 on the right should be displayed
  let pagesFrom = normalizePageNumber(currentPage - 2, totalItems, pageSize);

  let pagesTo = normalizePageNumber(currentPage + 2, totalItems, pageSize);

  // check the boundary values - first and last values, then they should be displayed
  // either from first to the right up to max page 5
  if (pagesFrom === 1) {
    pagesTo = normalizePageNumber(5, totalItems, pageSize);
    // or 4 more pages from the last left
  } else if (pagesTo === totalPages) {
    pagesFrom = normalizePageNumber(pagesTo - 4, totalItems, pageSize);
  }

  // Number of page numbers to be added (array length)
  const pagesLength = (pagesTo - pagesFrom) + 1;

  // return an array with numbers in order starting from pagesFrom
  return Array(pagesLength).fill(undefined).map((_, index) => pagesFrom + index);
};
