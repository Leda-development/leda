/* eslint-disable react/jsx-curly-brace-presence */
import { Code, Td, TdCode } from '@/components/typography';

export const ShouldRender = () => (
  <tr>
    <TdCode>shouldRender</TdCode>
    <TdCode>boolean</TdCode>
    <Td>Pass <Code>false</Code> if you {"don't"} want the component to appear</Td>
  </tr>
);
