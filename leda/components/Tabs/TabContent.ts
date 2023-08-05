import React from 'react';
import { isNil } from 'lodash';
import { TabContentProps } from './types';

export const TabContent = (props: TabContentProps): React.ReactElement | null => {
  // if children are not passed - the function will return an empty array
  const children = React.Children.toArray(props.children);
  // search for the selected tab
  const selectedTab = children.find((child) => React.isValidElement(child) && child.props.tabKey === props.activeTabKey);
  // render the content of the selected tab
  return React.isValidElement(selectedTab) && !isNil(selectedTab.props.children)
    ? selectedTab.props.children
    : null;
};
