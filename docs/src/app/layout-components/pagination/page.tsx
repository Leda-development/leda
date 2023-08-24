'use client';

import * as L from '@leda';
import { UnderscoreClasses } from '@/components/commonProps';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection } from '@/sections';

const PaginationPage = () => (
  <article>
    <H1>Pagination</H1>

    <PropsTableSection>
      <tr>
        <Td>currentPage</Td>
        <Td>number</Td>
        <Td>Current page number</Td>
      </tr>
      <tr>
        <Td>defaultPageSize</Td>
        <Td>number</Td>
        <Td>
          <p>
            Is used together with <b>pageSizeOptions</b>.
          </p>
          <p>...</p>
        </Td>
      </tr>
      <tr>
        <Td>isLoading</Td>
        <Td>boolean</Td>
        <Td>No clicks are handled in this state</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>{'(event: ChangeEvent) => void'}</Td>
        <Td>Current page change handler</Td>
      </tr>
      <tr>
        <Td>onPageSizeChangeHandler</Td>
        <Td>{'(event: PageSizeChangeEvent) => void'}</Td>
        <Td>Page size change handler</Td>
      </tr>
      <tr>
        <Td>pageSize</Td>
        <Td>number</Td>
        <Td>Number of items on the page</Td>
      </tr>
      <tr>
        <Td>pageSizeOptions</Td>
        <Td>number[]</Td>
        <Td>In case you want more</Td>
      </tr>
      <tr>
        <Td><b>totalItems</b></Td>
        <Td>number</Td>
        <Td>Total number of items to split across pages</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  const [pageSize, setPageSize] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <L.Pagination
      pageSize={pageSize}
      pageSizeOptions={[5, 10, 20, 50]}
      totalItems={1246}
      currentPage={currentPage}
      onChange={(ev) => setCurrentPage(ev.component.value)}
      onPageSizeChange={(ev) => setPageSize(ev.component.value ? parseInt(ev.component.value, 10) : undefined)}
    />
  );
}`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>itemsInfoRender</Td>
        <Td>{'CustomRender<PaginationProps, PaginationState, PaginationInfoProps>'}</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>itemsRangeInfoRender</Td>
        <Td>{'CustomRender<PaginationProps, PaginationState, PaginationRangeInfoProps>'}</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>itemsTotalInfoRender</Td>
        <Td>{'CustomRender<PaginationProps, PaginationState, PaginationTotalInfoProps>'}</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>pagesDropDownRender</Td>
        <Td>{'CustomRender<PaginationProps, PaginationState, PagesDropDownProps>'}</Td>
        <Td>...</Td>
      </tr>
    </CustomizationPropsTableSection>
  </article>
);

export default PaginationPage;
