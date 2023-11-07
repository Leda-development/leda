import React from 'react';
import {
  getClassNames, useTheme, useProps,
} from '../../utils';
import { createCloseButtonClickHandler, createEscapePressHandler, createOverlayClickHandler } from './handlers';
import { useCustomElements } from './hooks';
import type { ModalWindowProps } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { ModalContext } from './ModalContext';
import { IconTypes } from '../..';

export const ModalWindow = (props: ModalWindowProps): React.ReactElement => {
  const {
    children,
    className,
    innerRef,
    onClose,
    onCloseButtonClick,
    onEscapePress,
    onOverlayClick,
    size,
    theme: themeProp,
    isOpen,
    wrapperRender,
    iconRender,
    ...restProp
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.modal);

  const handleEscapePress = createEscapePressHandler(props);

  const handleOverlayClick = createOverlayClickHandler(props);

  const handleCloseButtonClick = createCloseButtonClickHandler(props);

  React.useEffect((): () => void => {
    document.addEventListener('keydown', handleEscapePress as unknown as EventListener);

    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;

      document.removeEventListener('keydown', handleEscapePress as unknown as EventListener);
    };
  }, [handleEscapePress]);

  const wrapperClassname = getClassNames(
    theme.wrapper,
  );

  const windowClassname = getClassNames(
    theme.window,
    className,
  );

  const {
    Wrapper,
    Icon,
  } = useCustomElements(props);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const modalContext = {
    headerClassName: theme.header,
    bodyClassName: theme.body,
    footerClassName: theme.footer,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      <Wrapper
        ref={innerRef}
        className={wrapperClassname}
        onClick={handleOverlayClick}
        {...restProp}
      >
        <div
          className={windowClassname}
        >
          <Icon
            icon={IconTypes.Icons.X}
            onClick={handleCloseButtonClick}
            className={theme.cross}
          />
          {children}
        </div>
      </Wrapper>
    </ModalContext.Provider>
  );
};
