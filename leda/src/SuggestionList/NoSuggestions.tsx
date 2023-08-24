import * as React from 'react';
import { Div } from '../../components/Div';
import type { NoSuggestionsProps } from './types';

export const NoSuggestions = ({ className, noSuggestionsText = 'Nothing found' }: NoSuggestionsProps): React.ReactElement => (
  <Div className={className}>{ noSuggestionsText }</Div>
);
