import { isFunction, isNil } from 'lodash';
import { getText } from '../../src/SuggestionList/helpers';
import { mergeState } from '../../utils';
import { filterData } from './helpers';
import {
  BlurHandler,
  ChangeHandler,
  FilterChangeHandler,
  FocusHandler,
  IconClickHandler,
  KeyDownHandler,
  HandlerCreatorData,
  ClearIconClickHandler,
} from './types';

export const createChangeHandler = ({
  props, setState,
}: HandlerCreatorData): ChangeHandler => ev => {
  const {
    onChange, name, onFilterChange,
  } = props;

  if (isFunction(onChange)) {
    const changeEvent = {
      ...ev,
      component: {
        value: ev.target.value,
        name,
      },
    };
    onChange(changeEvent);
  }

  // обновляем значение в стейте
  setState(mergeState({ value: ev.target.value }));

  setState(mergeState({
    highlightedSuggestion: ev.target.value,
    selectedSuggestion: ev.target.value,
  }));

  // после выбора значения закрываем список
  setState(mergeState({ isOpen: false }));

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: getText(ev.target.value),
      },
    };

    onFilterChange(customEvent);
  }

  // обновляем значение в стейте
  setState(mergeState({ filterValue: null }));
};

export const createBlurHandler = ({
  props, state, validate, value, setState,
}: HandlerCreatorData): BlurHandler => ev => {
  const {
    onFilterChange, onBlur, name, textField,
  } = props;

  const { highlightedSuggestion } = state;

  const isValid = validate();
  // убираем фокус
  setState(mergeState({ isFocused: false }));
  // закрываем список
  setState(mergeState({ isOpen: false }));
  // обновляем подсветку
  setState(mergeState({ highlightedSuggestion }));

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value: getText(value, textField),
      },
    };

    onFilterChange(customEvent);
  }

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
        isValid,
      },
    };

    onBlur(customEvent);
  }

  // обновляем значение в стейте
  setState(mergeState({ filterValue: null }));
};

export const createFocusHandler = ({
  props, value, setState,
}: HandlerCreatorData): FocusHandler => ev => {
  const { onFocus, name } = props;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
      },
    };

    onFocus(customEvent);
  }

  // открываем список
  setState(mergeState({ isOpen: true }));
  // добавляем фокус
  setState(mergeState({ isFocused: true }));
};

export const createIconClickHandler = ({
  props, state, inputRef, setState,
}: HandlerCreatorData): IconClickHandler => () => {
  const { isDisabled = false } = props;

  if (isDisabled) return;
  // фокусим инпут
  if (inputRef.current) inputRef.current.focus();
  // переключаем состояние списка (открыт/закрыт)
  setState(mergeState({ isOpen: !state.isOpen }));
};

export const createKeyDownHandler = ({
  props, state, setState,
}: HandlerCreatorData): KeyDownHandler => ev => {
  const {
    data,
    onChange,
    name,
    placeholder,
    shouldAllowEmpty,
    onFilterChange,
    shouldFilterValues,
    textField,
    filterRule,
  } = props;

  const { isOpen, highlightedSuggestion } = state;

  if (!data) return;

  const filterValue = isNil(props.filterValue) ? state.filterValue : props.filterValue;

  const filteredData = shouldFilterValues ? filterData(data, filterValue, textField, filterRule) || [] : data;

  const fullData = placeholder && shouldAllowEmpty ? [placeholder, ...filteredData] : filteredData;

  // текущий индекс
  const suggestionIndex = highlightedSuggestion !== null
    ? fullData.indexOf(highlightedSuggestion || '')
    : fullData.indexOf(placeholder || '');

  if (ev.key === 'ArrowDown' || ev.key === 'Down') {
    // предотвращаем скроллинг страницы
    ev.preventDefault();
    // новый индекс, механизм работает как барабан
    const nextIndex = (suggestionIndex + 1) % filteredData.length;
    // новое значение
    const newHighlightedSuggestion = fullData[nextIndex];

    if (isFunction(onChange)) {
      const changeEvent = {
        ...ev,
        component: {
          value: newHighlightedSuggestion === placeholder ? null : newHighlightedSuggestion,
          name,
        },
      };
      onChange(changeEvent);
    }

    // обновляем значение в стейте
    setState(mergeState({ highlightedSuggestion: newHighlightedSuggestion }));

    return;
  }

  if (ev.key === 'ArrowUp' || ev.key === 'Up') {
    // предотвращаем скроллинг страницы
    ev.preventDefault();
    // новый индекс, механизм работает как барабан
    const nextIndex = (() => {
      if (suggestionIndex <= 0) return filteredData.length - 1;

      return suggestionIndex - 1;
    })();
    // новое значение
    const newHighlightedSuggestion = fullData[nextIndex];

    if (isFunction(onChange)) {
      const changeEvent = {
        ...ev,
        component: {
          value: newHighlightedSuggestion === placeholder ? null : newHighlightedSuggestion,
          name,
        },
      };
      onChange(changeEvent);
    }

    // обновляем значение в стейте
    setState(mergeState({ highlightedSuggestion: newHighlightedSuggestion }));

    return;
  }

  if (ev.key === 'Enter') {
    if (isOpen) setState(mergeState({ isOpen: false }));

    const value = getText(highlightedSuggestion, textField);

    if (isFunction(onFilterChange)) {
      const customEvent = {
        ...ev,
        component: {
          name,
          value,
        },
      };

      onFilterChange(customEvent);
    }

    // обновляем значение в стейте
    setState(mergeState({
      filterValue: null,
      selectedSuggestion: highlightedSuggestion,
      value,
    }));

    return;
  }

  if ((ev.key === 'Escape' || ev.key === 'Esc') && isOpen) {
    setState(mergeState({ isOpen: false }));

    return;
  }

  if (ev.keyCode === 32 && !shouldFilterValues) {
    ev.preventDefault();

    setState(mergeState({ isOpen: true }));
  }
};

export const createFilterChangeHandler = ({
  props, setState,
}: HandlerCreatorData): FilterChangeHandler => ev => {
  const {
    onFilterChange, data, shouldFilterValues, name,
  } = props;

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value: ev.target.value,
      },
    };

    onFilterChange(customEvent);
  }

  // обновляем значение в стейте
  setState(mergeState({ filterValue: ev.target.value }));

  if (ev.target.value && data && shouldFilterValues) {
    setState(mergeState({ isOpen: true }));
  }
};

export const createClearIconClickHandler = ({
  props,
  setState,
}: HandlerCreatorData): ClearIconClickHandler => ev => {
  const { onChange, name } = props;

  if (isFunction(onChange)) {
    const changeEvent = {
      ...ev,
      component: {
        value: null,
        name,
      },
    };
    onChange(changeEvent);
  }

  setState(mergeState({ filterValue: null, value: null, selectedSuggestion: null }));
};
