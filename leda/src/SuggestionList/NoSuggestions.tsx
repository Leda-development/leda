import * as React from 'react';
import { Div } from '../../components/Div';
import { NoSuggestionsProps } from './types';

export const NoSuggestions = ({ className, noSuggestionsText = null }: NoSuggestionsProps): React.ReactElement => (
  <Div className={className}>{ noSuggestionsText }</Div>
);
