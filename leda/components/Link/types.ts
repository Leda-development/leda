import * as React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Путь для перехода по ссылке, оригинальный атрибут to */
  href: string,
  /** Нужно ли изменять history, оригинальный атрибут replace */
  shouldReplace?: boolean,
  /** Классы, переданные через _ */
  [x: string]: any,
}
