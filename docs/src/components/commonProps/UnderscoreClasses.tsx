/* eslint-disable react/jsx-curly-brace-presence */
import { Code, Td } from '@/components/typography';

export const UnderscoreClasses = () => (
  <tr>
    <Td>_[className]</Td>
    <Td>[x: string]: unknown</Td>
    <Td>E.g.: <Code>_w-48</Code> adds a css class <Code>w-48</Code> to the {"component's"} outer wrapper.</Td>
  </tr>
);
