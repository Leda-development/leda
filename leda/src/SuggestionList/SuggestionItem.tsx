import * as React from 'react';
import { LedaContext } from '../../components/LedaProvider';
import { Li } from '../../components/Li';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { getClassNames, useElement } from '../../utils';
import { createClickHandler } from './handlers';
import { SuggestionItemProps } from './types';
import { CheckBox } from '../../components/CheckBox';

export const SuggestionItem = (props: SuggestionItemProps): React.ReactElement => {
  const {
    hasCheckboxes,
    itemRender,
    isChoosed,
    isScrollTarget,
    isPlaceholder,
    isHighlighted,
    isSelected,
    isSemi,
    suggestionRef,
    text,
    theme,
  } = props;

  const {
    renders: { [COMPONENTS_NAMESPACES.suggestionList]: suggestionRenders },
  } = React.useContext(LedaContext);

  const Suggestion = useElement(
    'Suggestion',
    Li,
    itemRender || suggestionRenders.itemRender,
    props,
  );

  const SuggestionWrapper = useElement(
    'SuggestionWrapper',
    Li,
    itemRender || suggestionRenders.itemRender,
    props,
  );

  const handleClick = createClickHandler(props);

  const suggestionClassNames = getClassNames(
    theme.item,
    {
      [theme.itemPlaceholder]: isPlaceholder,
      [theme.itemHighlighted]: isHighlighted,
      [theme.itemSelected]: isSelected,
    },
  );

  const suggestion: JSX.Element = (
    <Suggestion
      className={suggestionClassNames}
      onClick={hasCheckboxes ? undefined : handleClick}
      ref={(component) => {
        if (isScrollTarget) {
          suggestionRef.current = (component?.wrapper || component) as HTMLElement;
        }
      }}
    >
      {text}
    </Suggestion>
  );

  return (
    <>
      {hasCheckboxes
        ? (
          <SuggestionWrapper
            className={suggestionClassNames}
            onClick={handleClick}
          >
            <CheckBox
              value={isChoosed}
              _semi={isSemi}
            >
              {suggestion}
            </CheckBox>
          </SuggestionWrapper>
        ) : suggestion}
    </>
  );
};

SuggestionItem.displayName = 'SuggestionItem';
