import React from 'react';
import { PasswordVisibilityIconProps } from './types';
import { Icon, IconTypes } from '../..';

export const PasswordVisibilityIcon = (props: PasswordVisibilityIconProps) => {
  const { isVisible, theme, onIconClick } = props;

  return (
    <Icon
      icon={isVisible ? IconTypes.Icons.EyeOff : IconTypes.Icons.Eye}
      className={isVisible ? theme.isVisibleIcon : theme.isHiddenIcon}
      onClick={(ev) => {
        onIconClick();
      }}
    />
  );
};
