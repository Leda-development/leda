import * as React from 'react';
import { isFunction } from 'lodash';
import { DropzoneRef } from 'react-dropzone';
import { getErrorCode } from './helpers';
import { CustomEventHandler } from '../../commonTypes';
import { FileUploadProps, RejectedFileType } from './types';

export const createClickHandler = (props: FileUploadProps & { fileUploadRef: React.MutableRefObject<DropzoneRef | undefined>}): CustomEventHandler<React.MouseEvent<HTMLDivElement>> => ev => {
  const { isLoading, onClick, fileUploadRef } = props;
  const customEvent = {
    ...ev,
    defaultPrevented: false, // somehow it is true (prevented) by default
  };

  customEvent.preventDefault = () => {
    customEvent.defaultPrevented = true;
  };

  if (isFunction(onClick)) onClick(customEvent);

  if (customEvent.defaultPrevented) return;

  if (!isLoading && fileUploadRef.current) fileUploadRef.current.open();
};

interface LoadHandler {
  (accepted: File[], rejected: File[]): void,
}

export const createLoadHandler = (props: FileUploadProps): LoadHandler => (accepted, rejected) => {
  const { onFileLoad } = props;

  // todo: изменить map на forEach, отрефакторить метод
  const rejectedWithErrors = rejected.map(item => {
    const rejectedFile: RejectedFileType = item;

    rejectedFile.errorCode = getErrorCode(item, props);

    return rejectedFile;
  });

  const acceptedFiles: File[] = [];

  // Обрабатываем файлы, принятые ядром.
  // Перенос файлов с ошибкой в rejected
  accepted.forEach(file => {
    const errorCode = getErrorCode(file, props);
    // Если ошибки обнаружены (0 - отсутствие ошибок)
    if (errorCode !== 0) {
      const rejectedFile: RejectedFileType = file;
      rejectedFile.errorCode = errorCode;
      rejectedWithErrors.push(rejectedFile);
      // Если файла еще нет то добавляем в acceptedFiles
    } else {
      acceptedFiles.push(file);
    }
  });

  const customEvent = {
    component: {
      value: {
        acceptedFiles,
        rejectedFiles: rejectedWithErrors,
      },
    },
  };

  if (isFunction(onFileLoad)) onFileLoad(customEvent);
};
