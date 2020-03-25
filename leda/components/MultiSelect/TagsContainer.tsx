import * as React from 'react';
import { TagsContainerProps } from './types';
import { Span } from '../Span';
import { Div } from '../Div';
import { getText } from '../../src/SuggestionList/helpers';

export const TagsContainer = (props: TagsContainerProps): React.ReactElement | null => {
  const {
    value, theme, onTagClick, onClearIconClick, onMouseDown, textField, hasClearButton, children,
  } = props;

  if (value.length === 0) return null;

  const tags = value.map((item, index) => React.cloneElement(children, {
    key: index.toString(),
    onIconClick: (event: React.MouseEvent<HTMLElement>) => onTagClick({
      ...event,
      target: {
        ...event.target,
        value: item,
      },
    }),
    children: getText(item, textField),
  }));

  return (
    <Div
      className={theme.tagsContainer}
      onMouseDown={onMouseDown}
    >
      {tags}
      {hasClearButton && (
        <Span
          className={theme.clearIcon}
          onClick={onClearIconClick}
        />
      )}
    </Div>
  );
};

TagsContainer.displayName = 'TagsContainer';
