'use client';

import * as L from '@leda';
import {
  CodeBlock, H1, Td, P,
} from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';

const LedaProviderPage = () => (
  <article>
    <H1>Leda</H1>

    <P>
      You can wrap your app into the Leda provider to give nested Leda components access to some globals
      you may want to define in the provider, see the table below.
    </P>

    <PropsTableSection>
      <tr>
        <Td>children</Td>
        <Td>React.ReactNode</Td>
        <Td>The app or a part of it that has access to the the other props</Td>
      </tr>
      <tr>
        <Td>theme</Td>
        <Td>
          <CodeBlock>
            {`PartialGlobalDefaultTheme
            
===
`}
          </CodeBlock>
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>renders</Td>
        <Td>
          <CodeBlock>
            {`GlobalDefaultRenders
            
===
`}
          </CodeBlock>
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td>underscoreClassesTransform</Td>
        <Td>
          <CodeBlock>
            {`UnderscoreClasses
                
===
enum UnderscoreClasses {
  NoTransform,
  CamelCaseTransform,
}
`}
          </CodeBlock>
        </Td>
        <Td>NoTransform is default</Td>
      </tr>
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  return (
    <>
      <L.Leda>
        ...
      </L.Leda>
    </>
  );
}`}
    </Live>
  </article>
);

export default LedaProviderPage;
