import * as React from 'react';
import { Div } from '../../components/Div';
import { formatDate } from '../DateTimeInput/helpers';
import type { TodayButtonProps } from './types';
import { useMessages } from '../../utils/useMessages';

export const TodayButton = (props: TodayButtonProps): React.ReactElement => {
  const {
    onClick,
    theme,
  } = props;

  const messages = useMessages('calendar');

  return (
    <Div
      className={theme.footer}
      title={formatDate(new Date(), messages)}
      onClick={onClick}
    >
      {formatDate(new Date(), messages)}
    </Div>
  );
};
