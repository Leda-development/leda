import * as React from 'react';
import type { TagsContainerProps } from './types';
import { Span } from '../Span';
import { Div } from '../Div';
import { getText } from '../../src/SuggestionList/helpers';
import type { SomeObject } from '../../commonTypes';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const TagsContainer = (props: TagsContainerProps): React.ReactElement | null => {
  const {
    value, theme, onTagClick, onClearIconClick, onMouseDown, textField, hasClearButton, children, shouldHideInput, placeholder,
  } = props;

  if (value.length === 0 && shouldHideInput) {
    return (
      <Div
        className={theme.tagsContainer}
        onMouseDown={onMouseDown}
      >
        <Span className={theme.placeholder}>{placeholder}</Span>
      </Div>
    );
  }

  if (value.length === 0) return null;

  return (
    <Div
      className={theme.tagsContainer}
      onMouseDown={onMouseDown}
    >
      {(value as (string | number | SomeObject)[]).map((item, index) => React.cloneElement(children, {
        // eslint-disable-next-line react/no-array-index-key
        key: index.toString(),
        onIconClick: (ev: React.MouseEvent<SVGElement>) => onTagClick({
          ...ev,
          target: {
            ...ev.target,
            value: item,
          },
        }),
        children: getText(item, textField),
      }))}
      {hasClearButton && (
        <Icon
          icon={IconTypes.Icons.X}
          className={theme.clearIcon}
          onClick={onClearIconClick}
        />
      )}
    </Div>
  );
};

TagsContainer.displayName = 'TagsContainer';
