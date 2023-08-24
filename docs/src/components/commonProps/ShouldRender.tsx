/* eslint-disable react/jsx-curly-brace-presence */
import { Code, Td } from '@/components/typography';

export const ShouldRender = () => (
  <tr>
    <Td>shouldRender</Td>
    <Td>boolean</Td>
    <Td>Pass <Code>false</Code> if you {"don't"} want the component to appear</Td>
  </tr>
);
