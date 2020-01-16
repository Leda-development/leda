import React from 'react';
import { match } from 'react-router-dom';
import { Location } from 'history';
import { CustomRender } from '../../commonTypes';

export interface NavLinkProps {
  /** Путь для перехода по ссылке */
  href: string,
  /** Ведет ли ссылка на внешний ресурс */
  isExternal?: boolean,
  /** Точное сравнение пути */
  isExact?: boolean,
  /** Сравнение с учетом всех составных элементов пути */
  isStrict?: boolean,
  /** Сравнение пути с переданным, вместо pathname в window.location */
  location?: string,
  /** Класс для ссылки */
  className?: string,
  /** Класс для активной ссылки. По умолчанию равно active */
  activeClassName?: string,
  /** функция для определения, активна ли ссылка */
  isActive?: (location: Location, match: match) => boolean,
  /** Выпадающий список при наведении на ссылку */
  dropDownRender?: CustomRender<NavLinkProps, {}, {}>,
  /** Дочерние элементы */
  children: React.ReactNode,
  /** Иконка рядом со ссылкой */
  iconRender?: CustomRender<NavLinkProps, {}, {}>,
  /** Спрятана ли ссылка */
  isHidden?: boolean,
  ref?: NavLinkRefCurrent,
  /** Открывается ли ссылка в новой вкладке */
  target?: '_blank' | '_self',
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface NavLinkRefCurrent {
  wrapper: HTMLLIElement | null,
}
