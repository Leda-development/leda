import * as React from 'react';
import { Span } from '../Span';
import { Button } from '../Button';
import { ErrorComponentProps } from './types';
import { Icon } from '../Icon';
import { IconTypes } from '../..';

export const ErrorComponent = (props: ErrorComponentProps) => {
  const {
    theme, handleRetry, errorMessage, ErrorItem, isDisabled, combinedButtonClassNames,
  } = props;

  return (
    <ErrorItem className={theme.description}>
      <Icon
        icon={IconTypes.Icons.Frown}
        className={theme.errorIcon}
      />
      <Span>
        Не удалось загрузить файл
        {errorMessage ? `. ${errorMessage}` : null}
      </Span>
      <Button
        className={combinedButtonClassNames}
        onClick={handleRetry}
        isDisabled={isDisabled}
      >
        <Span className={theme.retryIcon} />
        {' '}
        Заменить файл
      </Button>
    </ErrorItem>
  );
};
