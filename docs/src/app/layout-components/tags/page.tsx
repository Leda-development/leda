'use client';

import * as L from '@leda';
import { UnderscoreClasses } from '@/components/commonProps';
import {
  H1, H2, Section, THead, Table, Td, propsTableCommonHeaders,
} from '@/components/typography';
import { Live } from '@/components/live';

const TagsPage = () => (
  <article>
    <H1>Tags</H1>

    <Section>
      <H2>Tags props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td>wrapperRender</Td>
            <Td>{'CustomRender<TagsProps, {}, WrapperProps>'}</Td>
            <Td>...</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Section>
      <H2>Tag props</H2>
      <Table>
        <THead headers={propsTableCommonHeaders} />
        <tbody>
          <tr>
            <Td>iconRender</Td>
            <Td>{'CustomRender<TagProps, {}, IconProps>'}</Td>
            <Td>...</Td>
          </tr>
          <tr>
            <Td>onIconClick</Td>
            <Td>{'CustomEventHandler<React.MouseEvent<HTMLSpanElement>>'}</Td>
            <Td>Icon click handler</Td>
          </tr>
          <tr>
            <Td>wrapperRender</Td>
            <Td>{'CustomRender<TagProps, {}, WrapperProps>'}</Td>
            <Td>...</Td>
          </tr>
          <UnderscoreClasses />
        </tbody>
      </Table>
    </Section>

    <Live scope={{ L }}>
      {`
() => {
  return (
    <L.Tags>
      <L.Tag>Apple</L.Tag>
      <L.Tag>Banana</L.Tag>
      <L.Tag>Pineapple</L.Tag>
      <L.Tag>Plum</L.Tag>
    </L.Tags>
  );
}`}
    </Live>
  </article>
);

export default TagsPage;
