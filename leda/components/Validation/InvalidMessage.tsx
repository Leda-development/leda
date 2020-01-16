import React from 'react';
import { Span } from '../Span';
import { InvalidMessageProps } from './types';

export const InvalidMessage = ({ isValid, messages = [] }: InvalidMessageProps): React.ReactElement | null => (isValid || messages.length === 0
  ? null
  : (
    <Span _invalidMessageList>
      {messages.map((message) => (
        <Span key={message} _invalidMessageItem>
          {message}
        </Span>
      ))}
    </Span>
  ));
