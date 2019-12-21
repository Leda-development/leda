import * as React from 'react';
import { isFunction, isNil, isString } from 'lodash';
import { Guards } from '../../utils/monads';
import {
  CollapsePanelContextType,
  CollapsePanelHandlers,
  CollapseProps,
  HeadingProps,
  KeyState,
  SelectHandler,
  SetClicked,
} from './types';

const handleSelect = (props: CollapseProps, keyState: KeyState, setActivePanelKey: React.Dispatch<React.SetStateAction<KeyState>>): SelectHandler => ev => {
  const { onSelect, isAccordion, activePanelKey: keyProp } = props;

  const activePanelKey = isNil(keyProp) ? keyState : keyProp;

  const panelId = (ev.component as unknown as { value: KeyState }).value;

  const shouldClosePanel = (inwards: KeyState | undefined): boolean => (Array.isArray(inwards) && !isAccordion && inwards.includes(panelId as string));

  const shouldOpenPanel = (inwards: KeyState | undefined): boolean => (Array.isArray(inwards) && !isAccordion);

  const shouldCloseSinglePanel = (inwards: KeyState | undefined): boolean => (inwards === panelId && isAccordion as boolean);

  const shouldOpenSinglePanel = () => !!isAccordion;

  const closePanel = (inwards: string[]): string[] => inwards.filter((pid: string): boolean => pid !== panelId);

  const openPanel = (inwards: string[]): string[] => [...inwards, panelId as string];

  const newValue = Guards(activePanelKey)
    .when(shouldClosePanel, closePanel)
    .when(shouldOpenPanel, openPanel)
    .when(shouldCloseSinglePanel, () => null)
    .when(shouldOpenSinglePanel, () => panelId)
    .otherwise(() => null)
    .getValue();

  const customEvent = {
    component: {
      value: newValue,
    },
    target: {
      value: newValue,
    },
  };

  return isFunction(onSelect) ? onSelect(customEvent) : setActivePanelKey(newValue);
};

const createHeadingClickHandler = (setClicked: SetClicked): CollapsePanelHandlers['onHeadingClick'] => () => setClicked(true);

const createBodyRestHandler = (setClicked: SetClicked): CollapsePanelHandlers['onBodyRest'] => () => setClicked(false);

export const createCollapseHandlers = (
  props: CollapseProps,
  keyState: KeyState,
  setKeyState: React.Dispatch<React.SetStateAction<KeyState>>,
): { handleSelect: SelectHandler } => ({
  handleSelect: handleSelect(props, keyState, setKeyState),
});

export const createPanelHandlers = (setClicked: SetClicked): CollapsePanelHandlers => ({
  onHeadingClick: createHeadingClickHandler(setClicked),
  onBodyRest: createBodyRestHandler(setClicked),
});

export const handleHeadingClick = (props: HeadingProps, context: CollapsePanelContextType): React.MouseEventHandler<HTMLDivElement> => ev => {
  const { onClick } = props;
  const {
    panelKey, name, onSelect,
  } = context;

  const customEvent = {
    ...ev,
    component: {
      value: panelKey,
      name,
    },
    target: {
      ...ev.target,
      value: panelKey,
      name,
    },
  };

  onSelect(customEvent);
  context.onHeadingClick();

  if (isFunction(onClick)) {
    onClick(ev);
  }
};
