import React from 'react';
import type { InvalidMessageProps } from './types';

export const InvalidMessage = (
  {
    isValid,
    messages = [],
    theme,
  }: InvalidMessageProps,
): React.ReactElement | null => (isValid || messages.length === 0
  ? null
  : (
    <div className={theme.invalidMessagesList}>
      {messages.map((message) => (
        <div key={message} className={theme.invalidMessage}>
          {message}
        </div>
      ))}
    </div>
  ));
