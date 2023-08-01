import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Pagination = (): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [pageSize, setPageSize] = React.useState<number | undefined>(10);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  return (
    <L.Div _demo-story>
      <L.H4 _story-title>Pagination</L.H4>
      <br />
      <L.Pagination
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 50]}
        totalItems={1246}
        currentPage={currentPage}
        onChange={(ev: any) => setCurrentPage(ev.component.value)}
        onPageSizeChange={(ev: any) => setPageSize(ev.component.value ? parseInt(ev.component.value, 10) : undefined)}
        {...props}
      />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'No pages', props: { totalItems: 0 } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
