import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../Leda';
import { Ul } from '../Ul';
import { CustomElements, TabsProps } from './types';

export const useCustomElements = (props: TabsProps, state: { activeTabKey: string | number }): CustomElements => {
  const { renders: { [COMPONENTS_NAMESPACES.tabs]: tabsRenders } } = React.useContext(LedaContext);

  const {
    wrapperRender, contentRender, headingRender,
  } = props;

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || tabsRenders.wrapperRender,
    props,
    state,
  );

  const Content = useElement(
    'Content',
    Div,
    contentRender || tabsRenders.contentRender,
    props,
    state,
  );

  const Heading = useElement(
    'Heading',
    Ul,
    headingRender || tabsRenders.headerRender,
    props,
    state,
  );

  return {
    Wrapper,
    Content,
    Heading,
  };
};
