import { UnderscoreClasses } from '@/components/commonProps';
import {
  A, H1, P, Td, TdCode,
} from '@/components/typography';
import { CustomizationPropsTableSection, PropsTableSection } from '@/sections';
import { MainDemo } from './MainDemo.tsx';
import { PATHS } from '@/constants';

const PaginationPage = () => (
  <article>
    <H1>Pagination</H1>

    <PropsTableSection>
      <tr>
        <TdCode>currentPage</TdCode>
        <TdCode>number</TdCode>
        <Td>Current page number</Td>
      </tr>
      <tr>
        <TdCode>defaultPageSize</TdCode>
        <TdCode>number</TdCode>
        <Td>
          <p>
            Is used together with <b>pageSizeOptions</b>.
          </p>
          <p>...</p>
        </Td>
      </tr>
      <tr>
        <TdCode>isLoading</TdCode>
        <TdCode>boolean</TdCode>
        <Td>No clicks are handled in this state</Td>
      </tr>
      <tr>
        <TdCode>messages</TdCode>
        <TdCode>
          {
`PaginationMessages

====

interface PaginationMessages {
  outOf: string,
  pageSize: string,
  pageSizeAll: string,
  titleDotsNext: string,
  titleDotsPrevious: string,
  titleFirst: string,
  titleLast: string,
  titleNext: string,
  titlePrevious: string,
}`
          }
        </TdCode>
        <Td>
          <P>
            Customize component text labels
          </P>
          <P>
            Consider using <A href={PATHS.ledaProvider}>Leda provider</A> to set messages globally.
          </P>
        </Td>
      </tr>
      <tr>
        <TdCode>onChange</TdCode>
        <TdCode>{'(event: ChangeEvent) => void'}</TdCode>
        <Td>Current page change handler</Td>
      </tr>
      <tr>
        <TdCode>onPageSizeChangeHandler</TdCode>
        <TdCode>{'(event: PageSizeChangeEvent) => void'}</TdCode>
        <Td>Page size change handler</Td>
      </tr>
      <tr>
        <TdCode>pageSize</TdCode>
        <TdCode>number</TdCode>
        <Td>Number of items on the page</Td>
      </tr>
      <tr>
        <TdCode>pageSizeOptions</TdCode>
        <TdCode>number[]</TdCode>
        <Td>In case you want more</Td>
      </tr>
      <tr>
        <TdCode><b>totalItems</b></TdCode>
        <TdCode>number</TdCode>
        <Td>Total number of items to split across pages</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <MainDemo />

    <CustomizationPropsTableSection>
      <tr>
        <TdCode>itemsInfoRender</TdCode>
        <TdCode>{'CustomRender<PaginationProps, PaginationState, PaginationInfoProps>'}</TdCode>
        <Td>...</Td>
      </tr>
      <tr>
        <TdCode>itemsRangeInfoRender</TdCode>
        <TdCode>{'CustomRender<PaginationProps, PaginationState, PaginationRangeInfoProps>'}</TdCode>
        <Td>...</Td>
      </tr>
      <tr>
        <TdCode>itemsTotalInfoRender</TdCode>
        <TdCode>{'CustomRender<PaginationProps, PaginationState, PaginationTotalInfoProps>'}</TdCode>
        <Td>...</Td>
      </tr>
      <tr>
        <TdCode>pagesDropDownRender</TdCode>
        <TdCode>{'CustomRender<PaginationProps, PaginationState, PagesDropDownProps>'}</TdCode>
        <Td>...</Td>
      </tr>
    </CustomizationPropsTableSection>
  </article>
);

export default PaginationPage;
