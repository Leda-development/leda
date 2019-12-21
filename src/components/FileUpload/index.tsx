import * as React from 'react';
import { DropzoneRef, useDropzone } from 'react-dropzone';
import { mergeClassNames, bindFunctionalRef } from '../../utils';
import { MAX_FILE_SIZE, MIN_FILE_SIZE } from '../../constants';
import { Div } from '../Div';
import { createClickHandler, createLoadHandler } from './handlers';
import { FileUploadProps, FileUploadRefCurrent } from './types';
import { useCustomElements } from './hooks';

export const FileUpload = React.forwardRef((props: FileUploadProps, ref: React.Ref<FileUploadRefCurrent>): React.ReactElement => {
  const {
    allowedFiles,
    forbiddenFiles,
    className,
    isLoading,
    maxFileSize = MAX_FILE_SIZE,
    minFileSize = MIN_FILE_SIZE,
    onClick,
    onFileLoad,
    ref: refProp, // exclude from restProps
    infoRender,
    wrapperRender,
    ...restProps
  } = mergeClassNames<FileUploadProps>(props);

  const fileUploadRef = React.useRef<DropzoneRef | undefined>();

  const handleClick = createClickHandler({ ...props, fileUploadRef });

  const handleLoad = createLoadHandler(props);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: allowedFiles,
    maxSize: maxFileSize,
    minSize: minFileSize,
    multiple: false,
    onDrop: handleLoad,
  });

  fileUploadRef.current = { open };

  const { Wrapper, Info } = useCustomElements(props);

  const rootProps = getRootProps();

  return (
    <Wrapper
      className={className}
      onClick={handleClick}
      ref={ref && (component => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper || component,
      }))}
    >
      <Info>
        {isLoading ? 'Загрузка...' : 'Загрузить'}
      </Info>
      <Div
        {...rootProps}
        ref={component => {
          rootProps.ref.current = component ? component.wrapper : null;
        }}
      >
        <input {...restProps} {...getInputProps()} />
      </Div>
    </Wrapper>
  );
}) as React.FC<FileUploadProps>;

FileUpload.displayName = 'FileUpload';
