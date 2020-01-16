import * as React from 'react';

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** Убрать дефолтный класс icon-namespace */
  noIconClass?: boolean,
  /** Обработчик клика */
  onClick?: React.MouseEventHandler<SVGSVGElement>,
  ref?: React.Ref<SvgRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface SvgRefCurrent {
  wrapper: SVGSVGElement | null,
}
