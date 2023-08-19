import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { Form, FormsObject, ValidationButtonProps } from '../Validation/types';

export interface SubmitEvent extends React.MouseEvent<HTMLButtonElement> {
  form?: FormsObject,
  forms?: Form[],
}

export type ValidationFailEvent = React.MouseEvent<HTMLButtonElement> & { invalidForms: Form[] };

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, ValidationButtonProps {
  /** Form names */
  form?: string | string[],
  /** Disable component */
  isDisabled?: boolean,
  /** Loading state */
  isLoading?: boolean,
  /** Form submit handler. It does not work if the form has invalid fields */
  onClick?: (event: SubmitEvent) => void,
  /** It fires when the button is clicked and the form has invalid fields */
  onValidationFail?: (ev: ValidationFailEvent) => void,
  /** Ref */
  ref?: React.Ref<HTMLButtonElement>,
  /** How many seconds the form should wait before scrolling to invalid fields */
  scrollDelay?: number,
  /** How many pixels should be added between the screen top and the first invalid field */
  scrollOffset?: number,
  /** To render or not to render */
  shouldRender?: boolean,
  /** Scroll to invalid fields on button click */
  shouldScrollToInvalidFields?: boolean,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.button],
  /** Button type */
  type?: React.ButtonHTMLAttributes<{}>['type'],
  /** _css-class-name */
  [x: string]: unknown,
}
