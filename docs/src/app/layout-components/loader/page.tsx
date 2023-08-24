'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import { H1, Td } from '@/components/typography';
import { CustomizationPropsTableSection, PropsTableSection } from '@/sections';
import { UnderscoreClasses } from '@/components/commonProps';

const LoaderPage = () => (
  <article>
    <H1>Loader</H1>

    <PropsTableSection>
      <tr>
        <Td>children</Td>
        <Td>React.ReactNode</Td>
        <Td>Pass child elements if you want to cover them with a loader</Td>
      </tr>
      <tr>
        <Td>isGlobal</Td>
        <Td>boolean</Td>
        <Td>Global mode</Td>
      </tr>
      <tr>
        <Td>isLoading</Td>
        <Td>boolean</Td>
        <Td>Make it work</Td>
      </tr>
      <tr>
        <Td>onClick</Td>
        <Td>...</Td>
        <Td>Click handler</Td>
      </tr>
      <tr>
        <Td>theme</Td>
        <Td>...</Td>
        <Td>Theme</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => (<>
    <L.Loader isLoading _w-48 />
    <L.Loader>
      hi there
    </L.Loader>
  </>
);`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>iconRender</Td>
        <Td>{'CustomRender<LoaderProps, {}, {}>'}</Td>
        <Td>...</Td>
      </tr>
    </CustomizationPropsTableSection>
  </article>
);

export default LoaderPage;
