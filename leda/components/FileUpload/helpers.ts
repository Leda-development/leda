import accept from 'attr-accept';
import { MAX_FILE_SIZE, MIN_FILE_SIZE } from '../../constants';
import { FileUploadProps } from './types';

export const getErrorCode = (file: File, props: FileUploadProps): number => {
  const {
    allowedFiles, forbiddenFiles, minFileSize = MIN_FILE_SIZE, maxFileSize = MAX_FILE_SIZE,
  } = props;
  // проверка на тип передаваемого файла
  if (allowedFiles) {
    const isAccepted = accept({
      name: file.name,
      type: file.type,
    }, allowedFiles);

    if (!isAccepted) return 3;
  }
  // Проверка на запрещенные типы файлов
  if (forbiddenFiles) {
    const isAcceptedForbiddenFiles = accept({
      name: file.name,
      type: file.type,
    }, forbiddenFiles);

    if (isAcceptedForbiddenFiles) return 3;
  }

  if (file.size < minFileSize) return 1;
  if (file.size > maxFileSize) return 2;

  return 0; // неизвестная ошибка
};
