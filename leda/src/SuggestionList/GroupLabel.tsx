import * as React from 'react';
import { getSuggestionItemProps } from './helpers';
import { GroupedSomeObject, Value, GroupLabelProps } from './types';
import { SuggestionItem } from './SuggestionItem';
import { useElement } from '../../utils';
import { Div } from '../../components/Div';
import { LiProps } from '../../components/Li';

export const GroupLabel = (props: GroupLabelProps): React.ReactElement | null => {
  const {
    canSelectGroup,
    compareObjectsBy,
    groupLabelRender,
    hasCheckBoxes,
    highlightedSuggestion,
    selectedSuggestion,
    itemRender,
    onClick,
    placeholder,
    suggestionRef,
    suggestionRenders,
    suggestion,
    textField,
    theme,
    value,
  } = props;

  const suggestionGroupLabelComputedProps = getSuggestionItemProps({
    compareObjectsBy,
    highlightedSuggestion,
    placeholder,
    selectedSuggestion,
    suggestion,
    textField,
    isGroupLabel: true,
  });
  const isGroupChosen = canSelectGroup && (suggestion as GroupedSomeObject)?.dataItems?.every((elem) => (value as Value[])?.includes(elem));
  const isSemi = (() => {
    if (!canSelectGroup) return false;

    // all nested checkboxes are checked
    return (suggestion as GroupedSomeObject)?.dataItems?.some((elem) => (value as Value[])?.includes(elem));
  })();

  const GroupLabelComponent: React.FC<LiProps> = useElement(
    'GroupLabelComponent',
    Div,
    groupLabelRender || suggestionRenders.groupLabelRender,
    props,
  );

  return (
    <GroupLabelComponent className={theme.groupLabel}>
      {canSelectGroup
        ? (
          <SuggestionItem
            isChosen={isSemi}
            isSemi={!isGroupChosen && isSemi}
            itemRender={itemRender}
            onClick={onClick}
            suggestionRef={suggestionRef}
            textField={textField}
            theme={theme}
            hasCheckBoxes={hasCheckBoxes}
            {...suggestionGroupLabelComputedProps}
          />
        ) : (
          <SuggestionItem
            itemRender={itemRender}
            suggestionRef={suggestionRef}
            textField={textField}
            theme={theme}
            hasCheckBoxes={false}
            {...suggestionGroupLabelComputedProps}
          />
        )}
    </GroupLabelComponent>
  );
};

GroupLabel.displayName = 'GroupLabel';
