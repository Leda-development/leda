import * as React from 'react';
import { DropZoneViewTypes } from './constants';
import { ProgressLoader } from './ProgressLoader';
import { Span } from '../Span';
import { Button } from '../Button';
import { createDownloadLink, DescriptionMessage, getError } from './helpers';
import * as messages from '../../messages';
import {
  FileType, SingleFileViewProps,
} from './types';
import { getClassNames } from '../../utils';
import { Div } from '../Div';

export const SingleFileView = (props: SingleFileViewProps): React.ReactElement | null => {
  const {
    value, loadingData, theme, handleRetry, UploadButton, Info, isDisabled, minFileSize, allowedFiles, forbiddenFiles, maxFileSize,
  } = props;

  const combinedButtonClassNames = getClassNames(theme.button, { [theme.disabled]: isDisabled });

  const file = value ?? {} as Partial<FileType>;

  const blob = new Blob([file.name ?? ''], { type: file.type });

  const downloadLink = file.link || createDownloadLink(blob, file.name, theme);

  const currentView = (() => {
    if (loadingData?.error || value?.errorCode) return DropZoneViewTypes.Error;

    if ((loadingData && loadingData.loaded === loadingData.total) || (!loadingData && value)) return DropZoneViewTypes.Success;

    if (loadingData) return DropZoneViewTypes.Loading;

    return DropZoneViewTypes.Default;
  })();

  if (currentView === DropZoneViewTypes.Loading) {
    return (
      <Div className={theme.description}>
        <ProgressLoader loadingData={loadingData} isLoading theme={theme} />
        <Span>Загрузка...</Span>
      </Div>
    );
  }

  if (currentView === DropZoneViewTypes.Success) {
    return (
      <Div className={theme.description}>
        <Span className={theme.successIcon} />
        <Span>
          Файл
          {' '}
          {downloadLink}
          {' '}
          успешно загружен
        </Span>
        <Button className={theme.retryButton} onClick={handleRetry}>
          <Span className={theme.retryIcon} />
          {' '}
          Заменить файл
        </Button>
      </Div>
    );
  }

  if (currentView === DropZoneViewTypes.Error) {
    const errorMessage = (value && getError(value)?.message) ?? loadingData?.error?.message;
    return (
      <Div className={theme.description}>
        <Span className={theme.errorIcon} />
        <Span>
          Не удалось загрузить файл
          {errorMessage ? `. ${errorMessage}` : null}
        </Span>
        <Button className={theme.retryButton} onClick={handleRetry}>
          <Span className={theme.retryIcon} />
          {' '}
          Заменить файл
        </Button>
      </Div>
    );
  }

  return (
    <Info className={theme.description}>
      <Div className={theme.cloudIcon} />
      <Span>
        Перетащите сюда файл для загрузки
      </Span>
      <Span>
        или
        {' '}
        <UploadButton
          className={combinedButtonClassNames}
        >
          выберите файл
        </UploadButton>
        {' '}
        на вашем компьютере
      </Span>
      {' '}
      <DescriptionMessage>
        {messages.getFileSizeDescription(minFileSize, maxFileSize, 'byte')}
      </DescriptionMessage>
      {' '}
      <DescriptionMessage>
        {messages.getFormatsDescription(allowedFiles)}
      </DescriptionMessage>
      {' '}
      <DescriptionMessage>
        {messages.getForbiddenFormatsDescription(forbiddenFiles)}
      </DescriptionMessage>
    </Info>
  );
};
