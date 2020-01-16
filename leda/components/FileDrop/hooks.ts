import * as React from 'react';
import {
  CustomElements, FileDropProps, UploadButtonProps,
} from './types';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import { Button } from '../Button';
import { LedaContext } from '../Leda';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const useCustomElements = (props: FileDropProps): CustomElements => {
  const {
    infoRender, uploadButtonRender, wrapperRender,
  } = props;

  const context = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.dropZone].wrapperRender,
    props,
  );

  const Info = useElement(
    'Info',
    Span,
    infoRender || context.renders[COMPONENTS_NAMESPACES.dropZone].infoRender,
    props,
  );

  const UploadButton = useElement<FileDropProps, {}, UploadButtonProps>(
    'UploadButton',
    Button,
    uploadButtonRender || context.renders[COMPONENTS_NAMESPACES.dropZone].uploadButtonRender,
    props,
  );

  return {
    UploadButton,
    Info,
    Wrapper,
  };
};
