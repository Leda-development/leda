import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export interface ProgressBarProps {
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.progressBar],
  /** Значение "завершенности" прогресс бара */
  value: number,
  ref?: React.Ref<ProgressBarRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface ProgressBarRefCurrent {
  wrapper: HTMLDivElement | null,
}
