import * as React from 'react';
import { SuccessComponentProps } from './types';
import { Span } from '../Span';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { IconTypes } from '../..';


export const SuccessComponent = (props: SuccessComponentProps) => {
  const {
    theme,
    downloadLink,
    handleRetry,
    SuccessItem,
    combinedButtonClassNames,
    isDisabled,
  } = props;

  return (
    <SuccessItem className={theme.description}>
      <Icon
        icon={IconTypes.Icons.Check}
        className={theme.successIcon}
      />
      <Span>
        Файл
        {' '}
        {downloadLink}
        {' '}
        успешно загружен
      </Span>
      <Button
        className={combinedButtonClassNames}
        onClick={handleRetry}
        isDisabled={isDisabled}
      >
        <Icon
          icon={IconTypes.Icons.RefreshCw}
          className={theme.retryIcon}
        />
        {' '}
        Заменить файл
      </Button>
    </SuccessItem>
  );
};
