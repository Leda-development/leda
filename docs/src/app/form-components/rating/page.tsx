'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import { H1, P, Td } from '@/components/typography';
import { PropsTableSection, ValidationSection } from '@/sections';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';

const RatingPage = () => (
  <article>
    <H1>Rating</H1>
    <PropsTableSection>
      <tr>
        <Td>icon</Td>
        <Td>L.IconTypes.Icons</Td>
        <Td>In case you want any other icon</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Don't click the rating</Td>
      </tr>
      <tr>
        <Td>max</Td>
        <Td>number</Td>
        <Td>Max rating</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>(ev: ChangeEvent) ={'>'} void</Td>
        <Td>
          <P>Change handler.</P>
          <P>The component will be in the read only state if onChange is omitted</P>
        </Td>
      </tr>
      <tr>
        <Td>onClick</Td>
        <Td>{'React.MouseEventHandler<HTMLSpanElement>'}</Td>
        <Td>
          <P>Click handler, works for read only state</P>
        </Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>theme</Td>
        <Td>
          PartialGlobalDefaultTheme[
          typeof COMPONENTS_NAMESPACES.calendar
          ]
        </Td>
        <Td>...</Td>
      </tr>
      <tr>
        <Td><b>value</b></Td>
        <Td>number</Td>
        <Td>Value</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <L.Tabs className='mb-6'>
      <L.Tab title="Controlled" tabKey={0}>
        <Live scope={{ L }}>
        {
            `
() => {
  const [rating, setRating] = React.useState()

  return (
    <L.Rating
      value={rating}
      onChange={({ component }) => {
        setRating(component.value)
        console.log(component.value)
      }}
    >
      Click me
    </L.Rating>
  )
}
`
          }
        </Live>
      </L.Tab>
      <L.Tab title="Uncontrolled" tabKey={1}>
        <Live scope={{ L }}>
        {
            `
<L.Rating
  onChange={({ component }) => console.log(component.value)}
>
  Click me
</L.Rating>
  `
          }
        </Live>
      </L.Tab>
    </L.Tabs>
    
    

    <ValidationSection
      form
      name
      isValid
      isRequired
      invalidMessage
      invalidMessageRender
      requiredMessage
      shouldValidateUnmounted
      validator
    />
  </article>
);

export default RatingPage;
