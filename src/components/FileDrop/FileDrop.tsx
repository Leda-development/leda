import React from 'react';
import { DropzoneOptions, DropzoneRef, useDropzone } from 'react-dropzone';
import {
  bindFunctionalRef, getClassNames, mergeClassNames, useTheme,
} from '../../utils';
import { MAX_FILE_SIZE } from '../../constants';
import { Div } from '../Div';
import {
  getRestProps,
} from './helpers';
import { createChangeHandler, createClickHandler, createRetryHandler } from './handlers';
import {
  FileDropProps, FileDropRefCurrent,
} from './types';
import { useCustomElements } from './hooks';
import { SingleFileView } from './SingleFileView';

export const FileDrop = React.forwardRef((props: FileDropProps, ref: React.Ref<FileDropRefCurrent>): React.ReactElement => {
  const {
    allowedFiles,
    className,
    isDisabled,
    maxFileSize = MAX_FILE_SIZE,
    value,
  } = mergeClassNames<FileDropProps>(props);

  const fileDropRef = React.useRef<DropzoneRef | null>(null);

  const theme = useTheme(props.theme, 'fileDrop');

  const handleChange = createChangeHandler(props);

  const handleClick = createClickHandler(props, fileDropRef);

  const combinedClassNames = getClassNames(className, theme.wrapper, { [theme.disabled]: isDisabled });

  const combinedContentClassNames = getClassNames(theme.content, { [theme.disabled]: isDisabled });

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: handleChange as DropzoneOptions['onDrop'],
    accept: allowedFiles,
    maxSize: maxFileSize,
    multiple: false,
    disabled: isDisabled,
  });

  fileDropRef.current = { open };

  const {
    Info, UploadButton, Wrapper,
  } = useCustomElements(props);

  const rootProps = getRootProps();

  const handleRetry = createRetryHandler(props);

  const inputProps = { ...getInputProps(), ...getRestProps(props) };

  return (
    <Wrapper
      className={combinedClassNames}
      ref={ref && (component => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
        input: component.wrapper && component.wrapper.querySelector('input'),
      }))}
    >
      <Div
        {...rootProps}
        onClick={handleClick}
        className={combinedContentClassNames}
        ref={component => {
          rootProps.ref.current = component ? component.wrapper : null;
        }}
      >
        <input {...inputProps} />
        {' '}
        <SingleFileView
          {...props}
          theme={theme}
          value={value}
          handleRetry={handleRetry}
          UploadButton={UploadButton}
          Info={Info}
        />
      </Div>
    </Wrapper>
  );
}) as React.FC<FileDropProps>;

FileDrop.displayName = 'FileDrop';
