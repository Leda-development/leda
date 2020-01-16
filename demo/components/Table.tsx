import React from 'react';
import * as L from '../../leda';

const CollapseWrapper = React.forwardRef((props: { children?: React.ReactNode }, ref: any) => {
  const { children, ...restProps } = props;
  return (
    <L.Tr {...restProps}>
      <L.Td
        ref={ref}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
        }}
        colSpan={1}
      >
        <L.Span>
          {React.Children.toArray(children)[0]}
        </L.Span>
        {React.Children.toArray(children)[1]}
      </L.Td>
    </L.Tr>
  );
});

export const Table = () => {
  const [activeKey, setActiveKey] = React.useState<string | string[] | null>('1');

  return (
    <L.Div _demoStory>
      <L.H4 _title>Table</L.H4>
      <br />
      <L.Collapse isAccordion activePanelKey={activeKey} onSelect={ev => setActiveKey(ev.component.value)}>
        <L.Table>
          <L.TBody>
            <L.Collapse.Panel panelKey="1">
              <L.Collapse.Heading wrapperRender={({ elementProps }) => <CollapseWrapper {...elementProps} />}>
                <L.Span>Условия сделки продажи</L.Span>
              </L.Collapse.Heading>
              <L.Collapse.Body wrapperRender={({ elementProps }) => <CollapseWrapper {...elementProps} />}>
                <L.Div _inner>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  <br />euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </L.Div>
              </L.Collapse.Body>
            </L.Collapse.Panel>
            <L.Collapse.Panel panelKey="2">
              <L.Collapse.Heading
                wrapperRender={({ elementProps }) => <CollapseWrapper {...elementProps} />}
              >
                <L.Span>Условия сделки продажи 2</L.Span>
              </L.Collapse.Heading>
              <L.Collapse.Body wrapperRender={({ elementProps }) => <CollapseWrapper {...elementProps} />}>
                <L.Div _inner>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br />
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </L.Div>
              </L.Collapse.Body>
            </L.Collapse.Panel>
          </L.TBody>
        </L.Table>
      </L.Collapse>
    </L.Div>
  );
};
