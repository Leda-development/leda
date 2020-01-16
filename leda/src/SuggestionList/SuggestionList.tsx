import * as React from 'react';
import { isNil, isObject } from 'lodash';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/Leda';
import { Loader } from '../../components/Loader';
import { Ul } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useElement, useTheme } from '../../utils';
import { getText, scrollToSuggestion } from './helpers';
import { SuggestionItem } from './SuggestionItem';
import { SuggestionListProps } from './types';
import { NoSuggestions } from './NoSuggestions';

export const SuggestionList = (props: SuggestionListProps): React.ReactElement | null => {
  const {
    data,
    highlightedSuggestion,
    selectedSuggestion,
    isLoading,
    isOpen,
    itemRender,
    listRender,
    noSuggestionsRender,
    onClick,
    placeholder,
    shouldAllowEmpty,
    textField,
    theme: themeProp,
    value,
  } = props;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.suggestionList);

  const { renders: { [COMPONENTS_NAMESPACES.suggestionList]: suggestionRenders } } = React.useContext(LedaContext);

  const List = useElement(
    'List',
    Ul,
    listRender || suggestionRenders.listRender,
    props,
  );

  const NoSuggestionsComponent = useElement(
    'NoSuggestions',
    NoSuggestions,
    noSuggestionsRender || suggestionRenders.noSuggestionsRender,
    props,
  );

  const containerRef = React.useRef<HTMLElement | null>(null);

  const suggestionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect((): void => {
    // скроллим эффективно
    scrollToSuggestion(containerRef, suggestionRef);
  }, [isOpen, value, selectedSuggestion, highlightedSuggestion]);

  if (!isOpen) return null;

  if (isLoading) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()}>
        <Loader />
      </Div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()}>
        <NoSuggestionsComponent className={theme.noSuggestions} />
      </Div>
    );
  }

  const suggestions = !isNil(placeholder) && shouldAllowEmpty ? [placeholder, ...data] : data;

  return (
    <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()}>
      <List
        className={theme.list}
        ref={(component) => {
          containerRef.current = component && component.wrapper;
        }}
      >
        {suggestions.map((suggestion) => {
          const text = getText(suggestion, textField);

          if (!text) return null;

          const isPlaceholder = text === placeholder;
          const isHighlighted = suggestion === highlightedSuggestion;
          const isSelected = suggestion === selectedSuggestion;

          // является ли текущий элемент целью scrollToSuggestion
          const isScrollTarget = highlightedSuggestion ? isHighlighted : isSelected;

          const key = isObject(suggestion) ? JSON.stringify(suggestion) : suggestion as string;

          return (
            <SuggestionItem
              isHighlighted={isHighlighted}
              isPlaceholder={isPlaceholder}
              isScrollTarget={isScrollTarget}
              isSelected={isSelected}
              item={suggestion === placeholder ? null : suggestion}
              itemRender={itemRender}
              key={key}
              onClick={onClick}
              suggestionRef={suggestionRef}
              text={text}
              textField={textField}
              theme={theme}
            />
          );
        })}
      </List>
    </Div>
  );
};

SuggestionList.displayName = 'SuggestionList';
