'use client';

import * as L from '@leda';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import {
  H1, H2, P, Section, THead, Table, propsTableCommonHeaders,
} from '@/components/typography';
import { Live } from '@/components/live';

const HTMLPage = () => (
  <article>
    <H1>HTML components</H1>

    <P>
      Leda has its own HTML tags, they are the same HTML tags with some more props
    </P>

    <Section>
      <H2>HTML tags props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <ShouldRender />
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Live scope={{ L }}>
      {`
() => {
  return (
    <>
      <L.Div _w-48>
        Some content
      </L.Div>
    </>
  );
}`}
    </Live>
  </article>
);

export default HTMLPage;
