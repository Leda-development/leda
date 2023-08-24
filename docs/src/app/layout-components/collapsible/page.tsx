'use client';

/* eslint-disable max-len */

import * as L from '@leda';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { PropsTableSection } from '@/sections';

const CollapsiblePage = () => (
  <article>
    <H1>Collapsible</H1>

    <PropsTableSection>
      <tr>
        <Td><b>isOpen</b></Td>
        <Td>boolean</Td>
        <Td>Component state</Td>
      </tr>
      <tr>
        <Td>onClose</Td>
        <Td>{'() => void'}</Td>
        <Td>Close handler</Td>
      </tr>
      <tr>
        <Td>onOpen</Td>
        <Td>{'() => void'}</Td>
        <Td>Open handler</Td>
      </tr>
      <tr>
        <Td>onToggle</Td>
        <Td>{'() => void'}</Td>
        <Td>Toggle handler</Td>
      </tr>
      <tr>
        <Td>transition</Td>
        <Td>string</Td>
        <Td>
          <p>
            <a
              href="https://developer.mozilla.org/ru/docs/Web/CSS/transition"
              target="_blank"
              className="text-cyan-700 underline"
              rel="noreferrer"
            >
              CSS transition format
            </a>.
          </p>
          <p><i>height 250ms cubic-bezier(.4, 0, .2, 1)</i> by default</p>
        </Td>
      </tr>
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <L.Button onClick={() => setIsOpen(!isOpen)} >
        Toggle collapsible
      </L.Button>

      <L.Collapsible isOpen={isOpen}>
        <L.P _p-4>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </L.P>
      </L.Collapsible>
    </>
  );
};
  `}
    </Live>
  </article>
);

export default CollapsiblePage;
