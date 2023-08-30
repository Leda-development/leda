'use client';

import * as L from '@leda';
import React from 'react';
import { Live } from '@/components/live';

export const MessagesDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  const [pageSize, setPageSize] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <>
      <L.Leda
        messages={{
          pagination: {
            outOf: 'de',
            pageSize: 'Items por página',
            pageSizeAll: 'Todo',
            titleDotsNext: 'Páginas siguientes',
            titleDotsPrevious: 'Páginas anteriores',
            titleFirst: 'Primera página',
            titleLast: 'Última página',
            titleNext: 'Página siguiente',
            titlePrevious: 'Página anterior',
          }
        }}
      >
        <L.Pagination
          pageSize={pageSize}
          pageSizeOptions={[5, 10, 20, 50]}
          totalItems={1246}
          currentPage={currentPage}
          onChange={(ev) => setCurrentPage(ev.component.value)}
          onPageSizeChange={(ev) => setPageSize(ev.component.value ? parseInt(ev.component.value, 10) : undefined)}
        />
      </L.Leda>
    </>
  );
}`}
  </Live>
);
