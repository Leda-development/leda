import * as React from 'react';
import { isFunction } from 'lodash';
import { STEP_POSITION, STEP_TYPES } from './constants';
import { getClassNames, useElement } from '../../utils';
import { StatusBarItemProps } from './types';
import { Div } from '../Div';
import { Span } from '../Span';
import { LedaContext } from '../Leda';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const StatusBarItem: React.FC<StatusBarItemProps> = (props: StatusBarItemProps): React.ReactElement => {
  const {
    index,
    item,
    theme,
    iconRender,
    itemRender,
    labelRender,
    onClick,
    className,
    isFirst,
    isLast,
    type,
    position,
    labelText,
  } = props;

  const { renders: { [COMPONENTS_NAMESPACES.statusBar]: statusBarRenders } } = React.useContext(LedaContext);

  const handleIconClick = React.useCallback((ev: React.MouseEvent<HTMLDivElement>): false | void => {
    const customEvent = {
      ...ev,
      target: {
        ...ev.target,
        item,
        index,
      },
    };

    return isFunction(onClick) && onClick(customEvent);
  }, [onClick, item, index]);

  const iconClassNames = getClassNames(
    theme.statusIcon,
    { [theme.statusItemProgress]: type === STEP_TYPES.PROGRESS || position === STEP_POSITION.CURRENT },
    { [theme.statusItemSuccess]: type === STEP_TYPES.SUCCESS || position === STEP_POSITION.PREV },
    { [theme.statusItemDanger]: type === STEP_TYPES.DANGER },
    className,
  );

  const itemClassName = getClassNames(
    theme.statusItem,
    { [theme.statusItemFirst]: isFirst },
    { [theme.statusItemLast]: isLast },
  );

  const Item = useElement(
    'Item',
    Div,
    itemRender || statusBarRenders.itemRender,
    props,
  );

  const Icon = useElement(
    'Icon',
    Span,
    iconRender || statusBarRenders.iconRender,
    props,
  );

  const Label = useElement(
    'Label',
    Span,
    labelRender || statusBarRenders.labelRender,
    props,
  );

  return (
    <>
      <Item className={itemClassName}>
        <Icon className={iconClassNames} onClick={handleIconClick} />
        <Label className={theme.label}>
          {labelText}
        </Label>
      </Item>
      <div className={theme.statusLine} />
    </>
  );
};
