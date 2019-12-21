import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SliderSrc } from '../../src/ReactSlider';
import { getClassNames } from '../../utils';
import { GlobalDefaultTheme } from '../../utils/useTheme';

// Устанавливаем активные классы барам (бары это элементы-полоски, которые формируют выделение диапазона на шкале слайдера)
// Массив DOM-элементов баров забирается из рефа slider
export const setActiveBarClasses = (sliderRef: React.MutableRefObject<InstanceType<typeof SliderSrc> | null> | null, theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider]): void => {
  const sliderObject = ((sliderRef && sliderRef.current) || {}) as unknown as { [x: string]: unknown };

  const bars: HTMLElement[] = Object.keys(sliderObject).reduce((acc: HTMLElement[], key: string) => {
    if (new RegExp('^bar\\d*', 'i').test(key)) return [...acc, sliderObject[key]] as HTMLElement[];

    return acc;
  }, [] as HTMLElement[]);
    // Если только один ползунок (два бара в массиве)
  const isOneHandle = bars.length <= 2;

  bars.forEach((bar, index) => {
    // Если на шкале больше двух баров, то первый должен быть не закрашенным,
    // последний бар также всегда должен должны быть не закрашенным
    const isActive = (isOneHandle || index > 0) && index < bars.length - 1;

    if (isActive && bar.classList.contains(theme.trackActive)) return;

    bar.className = getClassNames(
      theme.track,
      {
        [theme.trackActive]: isActive,
      },
    ) || '';
  });
};
