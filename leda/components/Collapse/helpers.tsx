import React from 'react';
import { useElement } from '../../utils';
import { Div } from '../Div';
import type {
  HeadingProps,
  BodyProps,
  BodyWrapperProps,
  HeadingWrapperProps,
  IconProps,
  PanelProps,
  PanelWrapperProps,
} from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { LedaContext } from '../LedaProvider';
import { Icon } from '../Icon';

// eslint-disable-next-line react/jsx-no-useless-fragment
const defaultPanelWrapper = ({ children }: React.PropsWithChildren<object>) => <>{children}</>;

export const usePanelWrapper = (props: PanelProps, state: { isClicked: boolean }): React.FC<PanelWrapperProps> => {
  const { wrapperRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapsePanel]: collapsePanelRenders } } = React.useContext(LedaContext);

  return useElement(
    'Wrapper',
    defaultPanelWrapper,
    wrapperRender || collapsePanelRenders.wrapperRender,
    props,
    state,
  );
};

export const useBodyWrapper = (props: BodyProps): React.FC<BodyWrapperProps> => {
  const { wrapperRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapseBody]: collapseBodyRenders } } = React.useContext(LedaContext);

  return useElement<BodyProps, Record<string, never>, BodyWrapperProps>(
    'Wrapper',
    Div,
    wrapperRender || collapseBodyRenders.wrapperRender,
    props,
  );
};

export const useIcon = (props: HeadingProps): React.FC<IconProps> => {
  const { iconRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapseHeading]: collapseHeadingRenders } } = React.useContext(LedaContext);

  return useElement<HeadingProps, Record<string, never>, IconProps>(
    'Icon',
    Icon,
    iconRender || collapseHeadingRenders.iconRender,
    props,
  );
};

export const useCollapseHeading = (props: HeadingProps): React.FC<HeadingWrapperProps> => {
  const { wrapperRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapseHeading]: collapseHeadingRenders } } = React.useContext(LedaContext);

  return useElement<HeadingProps, Record<string, never>, HeadingWrapperProps>(
    'Wrapper',
    Div,
    wrapperRender || collapseHeadingRenders.wrapperRender,
    props,
  );
};
