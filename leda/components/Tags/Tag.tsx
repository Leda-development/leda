/* eslint-disable jsx-a11y/no-static-element-interactions */
// Static HTML element with event handler requires role
import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useElement, useProps,
} from '../../utils';
import { globalDefaultTheme, LedaContext } from '../LedaProvider';
import { Span } from '../Span';
import { TagProps, TagsRefCurrent } from './types';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const Tag = React.forwardRef((props: TagProps, ref?: React.Ref<TagsRefCurrent>): React.ReactElement => {
  const {
    children,
    className,
    iconRender,
    wrapperRender,
    onIconClick,
    theme = globalDefaultTheme[COMPONENTS_NAMESPACES.tags],
    ...restProps
  } = useProps(props);

  const { renders: { [COMPONENTS_NAMESPACES.tags]: tagsRenders } } = React.useContext(LedaContext);

  const combinedClassNames = getClassNames(
    theme.tag,
    className,
  );

  const Wrapper = useElement(
    'Wrapper',
    Span,
    wrapperRender || tagsRenders.tagWrapperRender,
    props,
  );

  return (
    <Wrapper
      className={combinedClassNames}
      {...restProps}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
    >
      { children }
      <Icon
        icon={IconTypes.Icons.X}
        className={theme.closeIcon}
        onClick={onIconClick}
      />
    </Wrapper>
  );
}) as React.FC<TagProps>;

Tag.displayName = 'Tag';
