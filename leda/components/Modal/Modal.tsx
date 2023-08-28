'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWindow } from './ModalWindow';
import type { ModalProps } from './types';

export const Modal = React.forwardRef((props: ModalProps, ref?: React.Ref<HTMLElement>): React.ReactNode => {
  if (props.isOpen) {
    return (
      props.isOpen && ReactDOM.createPortal(
        <ModalWindow
          isOpen={props.isOpen}
          innerRef={ref as unknown as React.Ref<HTMLElement>}
          {...(props as React.PropsWithoutRef<ModalProps>)}
        >
          {props.children}
        </ModalWindow>,
        document.querySelectorAll('body')[0],
      )
    );
  }

  return null;
}) as React.FC<ModalProps>;

Modal.displayName = 'Modal';
