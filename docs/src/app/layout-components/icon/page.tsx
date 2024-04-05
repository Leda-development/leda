'use client';

import { useState } from 'react';
import * as L from '@leda';
import { Live } from '@/components/live';
import {
  A, Code, H1, H2, P, Section, Td,
} from '@/components/typography';
import { PropsTableSection } from '@/sections';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';

const IconPage = () => {
  const [iconName, setIconName] = useState<string>('');
  return (
    <article>
      <H1>Icon</H1>

      <P>
        Leda wraps{' '}
        <A target="_blank" href="https://github.com/ianmiller347/feather-icons-react#readme">
          feather-icons-react
        </A> to add standard Leda props and types.
      </P>

      <PropsTableSection>
        <tr>
          <Td>fill</Td>
          <Td>string | null</Td>
          <Td>Fill color, e.g. red or #ff0000 or rgb(255,0,0), default is none</Td>
        </tr>
        <tr>
          <Td><b>icon</b></Td>
          <Td>Icon</Td>
          <Td>
            <P>
              Icon type, use a plain string with the icon name or use an exported icon names enum <Code>L.IconTypes.Icons</Code>.
            </P>
            <p>
              All icon types see below
            </p>
          </Td>
        </tr>
        <ShouldRender />
        <tr>
          <Td>size</Td>
          <Td>number | string | null</Td>
          <Td>Icon size, default is 24</Td>
        </tr>
        <tr>
          <Td>stroke</Td>
          <Td>string | null</Td>
          <Td>
            Stroke color, e.g. red or #ff0000 or rgb(255,0,0), defaults to <Code>currentColor</Code>
          </Td>
        </tr>
        <tr>
          <Td>strokeOpacity</Td>
          <Td>number | string | null</Td>
          <Td>Stroke opacity</Td>
        </tr>
        <tr>
          <Td>strokeWidth</Td>
          <Td>number | string | null</Td>
          <Td>Stroke width, default is 2</Td>
        </tr>
        <tr>
          <Td>[SVG props]</Td>
          <Td>{'SVGProps<SVGElement>'}</Td>
          <Td>You can pass all supported SVG props</Td>
        </tr>
        <UnderscoreClasses />
      </PropsTableSection>
      <Live scope={{ L }}>
        {
`<L.Div _flex _mb-4>
  <L.Icon icon='star' />

  <L.Icon
    icon={L.IconTypes.Icons.Star}
    fill='gold'
    size={24}
    stroke='#66cc22'
    strokeWidth={1}
    _ml-4
  />
</L.Div>`
        }
      </Live>

      <Section>
        <H2>All icons</H2>

        <div className="my-6 mt-4">
          <L.Input
            onChange={({ component: { value } }) => setIconName(value.toLowerCase())}
            placeholder="Search icons"
            _w-48
          />
        </div>

        <L.Div className="flex flex-wrap">
          {Object.values(L.IconTypes.Icons).map((icon) => {
            if (iconName.trim() !== '') {
              if (!icon.includes(iconName)) return null;
            }

            return (
              <div className="my-4 w-16 flex-col items-center md:w-24">
                <L.Icon icon={icon} />
                <span className="mt-3 text-center text-xs">{icon}</span>
              </div>
            );
          })}
        </L.Div>

      </Section>
    </article>
  );
};

export default IconPage;
