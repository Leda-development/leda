import * as React from 'react';
import { TabProps } from './types';

export const convertToCustom = (children: React.ReactNode, Tab: React.FC<TabProps>): (React.ReactElement | null)[] => React.Children.map<React.ReactElement | null, React.ReactNode>(
  children,
  child => (React.isValidElement(child)
    ? <Tab {...child.props} />
    : null),
);
