/* eslint-disable react/jsx-curly-brace-presence */
import { Code, Td, TdCode } from '@/components/typography';

export const UnderscoreClasses = () => (
  <tr>
    <TdCode>_[className]</TdCode>
    <TdCode>[x: string]: unknown</TdCode>
    <Td>E.g.: <Code>_w-48</Code> adds a css class <Code>w-48</Code> to the {"component's"} outer wrapper.</Td>
  </tr>
);
