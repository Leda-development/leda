import * as React from 'react';
import { Div } from '../../components/Div';
import { formatDate } from '../DateTimeInput/helpers';
import type { TodayButtonProps } from './types';
import { useMessages } from '../../utils/useMessages';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const TodayButton = (props: TodayButtonProps): React.ReactElement => {
  const {
    onClick,
    theme,
  } = props;

  const messages = useMessages({
    fieldName: COMPONENTS_NAMESPACES.calendar,
  });

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
