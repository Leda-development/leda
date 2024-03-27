'use client';

import * as L from '@leda';
import { Live } from '@/components/live';
import {
  A, H1, H2, P, Section, Table, Td, TdCode, Th,
} from '@/components/typography';
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
        <Td>iconProps</Td>
        <Td>IconProps</Td>
        <Td>
          <b>stroke</b>, <b>fill</b> etc.
          See <A href="/layout-components/icon">Icon</A>
        </Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Don&apos;t click the rating</Td>
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

    <L.Tabs className="mb-6">
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

    <L.Tabs className="mb-6">
      <L.Tab title="Get component data" tabKey={0}>
        <Live scope={{ L }}>
          {
            `
() => {

  return (
    <>
      <L.Rating
        form='rating-validation-form'
        name='rating'
        max={10}
        _mb-6
      >
        Click me
      </L.Rating>

      <L.Button
        form='rating-validation-form'
        onClick={({ component }) => {
          console.log(component.value)
        }}
      >
        Click me
      </L.Button>
    </>
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

    <Section>
      <H2>Rating theme</H2>

      <Table>
        <thead>
          <tr>
            <Th>Theme prop</Th>
            <Th>CSS class name</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdCode>disabled</TdCode>
            <TdCode>ld-rating-disabled</TdCode>
          </tr>
          <tr>
            <TdCode>invalid</TdCode>
            <TdCode>ld-rating-invalid</TdCode>
          </tr>
          <tr>
            <TdCode>item</TdCode>
            <TdCode>ld-rating-item</TdCode>
          </tr>
          <tr>
            <TdCode>itemFilled</TdCode>
            <TdCode>ld-filled</TdCode>
          </tr>
          <tr>
            <TdCode>itemWrapper</TdCode>
            <TdCode>ld-rating-wrapper</TdCode>
          </tr>
        </tbody>
      </Table>
    </Section>
  </article>
);

export default RatingPage;
