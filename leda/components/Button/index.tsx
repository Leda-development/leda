import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, useTheme, useProps,
} from '../../utils';
import { createClickHandler } from './handlers';
import { ButtonProps } from './types';
import { Icon, IconTypes } from '../../';

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>): React.ReactElement | null => {
  const {
    children,
    className,
    isDisabled,
    isLoading,
    form,
    onValidationFail,
    scrollDelay,
    scrollOffset,
    shouldRender,
    shouldScrollToInvalidFields,
    shouldValidateUnmounted,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.button);

  if (shouldRender === false) return null;

  const { disabled, loading, loadingIcon, wrapper } = theme;

  const handleClick = createClickHandler(props);

  const combinedClassNames = getClassNames(
    wrapper,
    className,
    { [disabled]: isDisabled },
    { [loading]: isLoading },
  );

  return (
    <button
      type="button"
      {...restProps}
      className={combinedClassNames}
      onClick={handleClick}
      ref={ref}
    >
      {isLoading && (
        <Icon
          icon={IconTypes.Icons.Loader}
          className={loadingIcon}
        />
      )}
      {children}
    </button>
  );
}) as React.FC<ButtonProps>;

Button.displayName = 'Button';
