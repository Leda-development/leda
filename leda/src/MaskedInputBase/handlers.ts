import type React from 'react';
import { isFunction } from 'lodash';
import type {
  BlurData, ChangeData, ExtendedEvent, FocusData, KeyDownData, MaskedInputBaseProps,
} from './types';
import {
  addChar,
  compareText,
  getEmptyValue,
  getRawValue,
  getSelection,
  getValue,
  maskValue,
  removeChar,
  setSelection,
} from './helpers';
import { InputMethod } from './constants';

export const createChangeHandler = (props: MaskedInputBaseProps, extraData: ChangeData): React.ChangeEventHandler<HTMLInputElement> => (ev) => {
  ev.preventDefault();

  const {
    onChange, mask, placeholderChar = '_',
  } = props;

  const { inputValue, setInputValue } = extraData;

  const input = ev.currentTarget;

  const compareResult = compareText(inputValue, ev.target.value);

  const inputMethod = (() => {
    if (compareResult[1] && compareResult[2]) {
      return InputMethod.replace;
    }

    if (compareResult[1]) {
      return InputMethod.add;
    }

    if (compareResult[2]) {
      return InputMethod.remove;
    }

    return InputMethod.nothing;
  })();

  const char = compareResult[1];

  const selection = getSelection(input);

  const newValue = (() => {
    if (inputMethod === InputMethod.replace) {
      const hurtValue = removeChar({
        value: inputValue,
        mask,
        placeholderChar,
        selection,
        position: compareResult[0],
        removed: compareResult[2],
        input,
      });

      return addChar({
        value: hurtValue,
        mask,
        placeholderChar,
        selection: [compareResult[0], compareResult[0]],
        char,
        input,
      });
    }

    if (inputMethod === InputMethod.add) {
      return addChar({
        value: inputValue,
        mask,
        placeholderChar,
        selection: [compareResult[0], compareResult[0]],
        char,
        input,
      });
    }

    if (inputMethod === InputMethod.remove) {
      return removeChar({
        value: inputValue,
        mask,
        placeholderChar,
        selection,
        position: compareResult[0],
        removed: compareResult[2],
        input,
      });
    }
    // inputMethod === 'nothing'
    return inputValue;
  })();

  setInputValue(newValue);

  if (input) input.value = newValue;

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: newValue.includes(placeholderChar) ? '' : getRawValue(newValue, mask),
        inputValue: newValue,
      },
    };

    onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
  }
};

export const createKeyDownHandler = (props: MaskedInputBaseProps, extraData: KeyDownData): React.KeyboardEventHandler<HTMLInputElement> => (ev) => {
  const {
    onChange, value, mask, onKeyDown, placeholderChar = '_',
  } = props;

  const { inputRef: { current: input } } = extraData;

  if (isFunction(onKeyDown)) {
    const customEvent = {
      ...ev,
      component: {
        value,
      },
    };

    onKeyDown(customEvent as unknown as ExtendedEvent<React.KeyboardEvent<HTMLInputElement>>);
  }

  if ((ev.metaKey || ev.ctrlKey) && ev.key === 'x') {
    ev.preventDefault();

    document.execCommand('copy');

    const emptyValue = getEmptyValue(mask, placeholderChar);

    if (input) input.value = emptyValue;

    if (isFunction(onChange)) {
      const customEvent = {
        ...ev,
        component: {
          value: '',
          inputValue: emptyValue,
        },
      };

      onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
    }
  }
};

export const createPasteHandler = (
  props: MaskedInputBaseProps,
): React.ClipboardEventHandler<HTMLInputElement> => (ev) => {
  const {
    onChange, mask, placeholderChar = '_', isDisabled,
  } = props;

  ev.preventDefault();
  // for unknown reasons onPaste works even on disabled inputs
  if (isDisabled) return;

  const newValue = maskValue(ev.clipboardData.getData('Text'), mask, placeholderChar);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: newValue.includes(placeholderChar) ? '' : newValue,
      },
    };

    onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
  }
};

export const createFocusHandler = (props: MaskedInputBaseProps, extraData: FocusData): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const {
    value: valueProp, onFocus, mask, placeholderChar = '_',
  } = props;

  const {
    isFocused, inputRef: { current: input }, setFocused, setInputValue, inputValue,
  } = extraData;

  setFocused(true);

  const newInputValue = (() => {
    if (!valueProp && inputValue) { // the input is neither completely filled nor empty
      return inputValue;
    }
    return maskValue(valueProp, mask, placeholderChar);
  })();

  setInputValue(newInputValue);

  const value = getValue({
    valueProp,
    inputValue,
    mask,
    placeholderChar,
    isFocused,
  });

  if (ev.target) {
    ev.target.value = newInputValue;
  }

  const placeholderCharIndex = (value || getEmptyValue(mask, placeholderChar)).indexOf(placeholderChar);
  const newSelection: [number, number] = [placeholderCharIndex, placeholderCharIndex + 1];

  setSelection(input, newSelection);

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        value,
      },
    };

    onFocus(customEvent as unknown as ExtendedEvent<React.FocusEvent<HTMLInputElement>>);
  }
};

export const createBlurHandler = (props: MaskedInputBaseProps, extraData: BlurData): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const {
    onBlur, value,
  } = props;

  const {
    inputValue, setFocused, setInputValue, placeholderChar, mask,
  } = extraData;

  setFocused(false);

  const emptyValue = getEmptyValue(mask, placeholderChar);

  // user didn't enter anything
  if (emptyValue === inputValue) {
    setInputValue('');
  }

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value,
      },
    };

    onBlur(customEvent as unknown as ExtendedEvent<React.FocusEvent<HTMLInputElement>>);
  }
};
