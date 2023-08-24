'use client';

/* eslint-disable react/jsx-curly-brace-presence */

import * as L from '@leda';
import {
  H1, Td,
} from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection } from '@/sections';

const TooltipPage = () => (
  <article>
    <H1>Tooltip</H1>

    <PropsTableSection>
      <tr>
        <Td>arrowSize</Td>
        <Td>number</Td>
        <Td>Arrow size in px</Td>
      </tr>
      <tr>
        <Td>children</Td>
        <Td>React.ReactNode</Td>
        <Td>Base component/components for the tooltip</Td>
      </tr>
      <tr>
        <Td>isOpen</Td>
        <Td>boolean</Td>
        <Td>Controlled open state</Td>
      </tr>
      <tr>
        <Td>position</Td>
        <Td>{"'top' | 'right' | 'bottom' | 'left' | undefined"}</Td>
        <Td><b>top</b> is default</Td>
      </tr>
      <tr>
        <Td>title</Td>
        <Td>React.ReactNode</Td>
        <Td>Title as a string, HTML or JSX</Td>
      </tr>
      <tr>
        <Td>transitionTimeout</Td>
        <Td>number</Td>
        <Td>Max animation duration</Td>
      </tr>
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  const [open, setOpen] = React.useState();

  return (
    <>
      <L.Tooltip isOpen={open} position="top" title="Tooltip at top top top top top top top top top top top top top top top top">
        <L.Button>Top</L.Button>
      </L.Tooltip>
      <L.Tooltip isOpen={open} position="left" title="Tooltip at left">
        <L.Button>Left</L.Button>
      </L.Tooltip>
      <L.Tooltip isOpen={open} position="right" title="Tooltip at right right right right right right right right right right">
        <L.Button>Right</L.Button>
      </L.Tooltip>
      <L.Tooltip isOpen={open} position="bottom" title="Tooltip at bottom bottom bottom bottom bottom bottom bottom bottom">
        <L.Button onClick={() => setDisplay(!display)}>Bottom</L.Button>
      </L.Tooltip>
    </>
  );
}`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>valueRender</Td>
        <Td>{'CustomRender<ProgressBarProps, {}, ValueLabelProps>'}</Td>
        <Td>...</Td>
      </tr>
    </CustomizationPropsTableSection>
  </article>
);

export default TooltipPage;
