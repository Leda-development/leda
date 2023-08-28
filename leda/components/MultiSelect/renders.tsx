/* eslint-disable react/prop-types */
import * as React from 'react';
import { Div } from '../Div';
import { CheckBox } from '../CheckBox';
import { getClassNames, useElement } from '../../utils';
import type { defaultMultiSelectTheme } from './theme';
import type { SuggestionListProps } from '../../src/SuggestionList/types';
import { selectAllSuggestion, SelectedState } from './constants';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { LedaContext } from '../LedaProvider';
import { Span } from '../Span';
import { IconTypes } from '../..';

// eslint-disable-next-line func-names
export const createCheckBoxesRender = ({ theme, itemRender }: { theme: typeof defaultMultiSelectTheme, itemRender: SuggestionListProps['itemRender'] }): SuggestionListProps['itemRender'] => function ({ componentProps, Element, elementProps }) {
  const {
    isSelected, isSelectAllItem, selectAllState, selectAllItemRender,
  } = componentProps;

  const checkBoxWrapperClassNames = getClassNames(
    theme.checkBoxContainer,
    elementProps.className,
  );

  const { renders: { [COMPONENTS_NAMESPACES.multiSelect]: multiSelectRenders } } = React.useContext(LedaContext);

  const SelectAllItem = useElement(
    'SelectAllItem',
    Span,
    selectAllItemRender || multiSelectRenders.selectAllItemRender,
    {},
    {},
  );

  const ItemContent = useElement(
    'ItemContent',
    Span,
    itemRender || multiSelectRenders.itemRender,
    componentProps,
    {},
  );

  const isCheckBoxSelected = (() => {
    if (isSelectAllItem) {
      if (selectAllState === SelectedState.Nothing) return false;
      return true;
    }
    return !!isSelected;
  })();

  const isSemi = isSelectAllItem && selectAllState === SelectedState.Some;
  return (
    <Element {...elementProps} className={checkBoxWrapperClassNames}>
      <CheckBox
        value={isCheckBoxSelected}
        // replaсe label with div so that the focus does not move from the multiselect and the list does not close when clicking on a checkbox
        // eslint-disable-next-line react/no-unstable-nested-components
        labelRender={({ elementProps: labelElementProps }) => <Div {...labelElementProps} className={theme.checkBoxLabel} />}
        checkboxIcon={isSemi && IconTypes.Icons.MinusSquare}
        className={theme.checkBoxWrapper}
      />
      {isSelectAllItem && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <SelectAllItem>
          {selectAllSuggestion.text}
        </SelectAllItem>
      )}
      {!isSelectAllItem && (
        <ItemContent>
          {elementProps.children}
        </ItemContent>
      )}
    </Element>
  );
};
