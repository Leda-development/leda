import * as L from '@leda';
import type { PropsWithChildren } from 'react';
import { H2, THead, Table } from '@/components/typography';
import { propsTableCommonHeaders } from '@/components/typography/Table';

export const PropsTableSection = ({ children }: PropsWithChildren) => (
  <section className='mb-6'>
    <H2>Props</H2>
    <L.Div
      _overflow-x-auto
    >
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          { children }
        </tbody>
      </Table>
    </L.Div>
  </section>
);
