'use client';

import * as L from '@leda';
import { H1, P, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';

const UtilsPage = () => (
  <article>
    <H1>utils</H1>

    <P>
      All these helper functions and hooks can be used as L.utils.<i>utilName()</i>
    </P>

    <PropsTableSection>
      <tr>
        <Td>bindFunctionalRef</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>bytesSizeToUnitsSize</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>generateId</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>getClassNames</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>getIsSentenceIncludingWords</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>getSizeInBytes</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>getWordEnding</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>scrollIntoView</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>useElement</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>useElementRef</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>useInterval</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>useProps</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>useValue</Td>
        <Td>...</Td>
        <Td>...</Td>
      </tr>
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  return (
    <>
      ...
    </>
  );
}`}
    </Live>
  </article>
);

export default UtilsPage;
