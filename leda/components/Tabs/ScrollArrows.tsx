import React from 'react';
import { ArrowProps } from './types';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const ArrowRight = ({ onClick, theme }: ArrowProps) => (
  <Icon
    icon={IconTypes.Icons.ChevronRight}
    className={theme?.arrowRight}
    onClick={onClick}
  />
);

export const ArrowLeft = ({ onClick, theme }: ArrowProps) => (
  <Icon
    icon={IconTypes.Icons.ChevronLeft}
    onClick={onClick}
    className={theme?.arrowLeft}
  />
);
