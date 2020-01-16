import React, {
  useState, useCallback,
} from 'react';
import { isEqual, isFunction, isObject } from 'lodash';
import {
  mergeClassNames, bindFunctionalRef, useTheme, useElement,
} from '../../utils';
import { A } from '../A';
import { DropDown } from '../DropDown';
import { Ul } from '../Ul';
import { DropDownLinkItem } from './DropDownLinkItem';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  ClickEvent, DropDownLinkProps, DropDownLinkRefCurrent, DropDownLinkType, TitleProps,
} from './types';
import { DataObject } from '../../commonTypes';

export const DropDownLink = React.forwardRef((props: DropDownLinkProps, ref?: React.Ref<DropDownLinkRefCurrent>): React.ReactElement | null => {
  const {
    data,
    itemRender,
    name,
    onChange,
    onMouseEnter,
    textField = '',
    titleRender,
    value = '',
    ...restProps
  } = mergeClassNames(props);

  const Title = useElement<DropDownLinkProps, {}, TitleProps>(
    'Title',
    A,
    titleRender,
    props,
  );

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.dropDownLink);

  if (!data) return null;

  const [hidden, setHidden] = useState(false);

  const handleClick = useCallback((ev: ClickEvent): void => {
    setHidden(true);
    if (isFunction(onChange)) onChange(ev);
  }, [onChange]);

  const handleMouseEnter = useCallback((ev): void => {
    setHidden(false);
    if (isFunction(onMouseEnter)) onMouseEnter(ev);
  }, [onMouseEnter]);

  const currentItem = (data as (DataObject | string)[]).find((item) => isEqual(item, value));

  const titleText: string | number = isObject(currentItem)
    ? currentItem[textField]
    : value as string;

  return (
    <DropDown
      onMouseEnter={handleMouseEnter}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      theme={{ wrapper: theme.wrapper }}
      {...restProps}
    >
      <Title className={theme.currentText}>{titleText}</Title>
      {!hidden && (
        <Ul default>
          {
            (data as (DataObject | string)[]).map((item) => (
              <DropDownLinkItem
                className={theme.item}
                item={item}
                itemRender={itemRender}
                key={`${name}_${isObject(item) ? item[textField] : item}`}
                name={name}
                onClick={handleClick}
                textField={textField}
              />
            ))
          }
        </Ul>
      )}
    </DropDown>
  );
}) as DropDownLinkType;

DropDownLink.Item = DropDownLinkItem;

DropDownLink.displayName = 'DropDownLink';
