import * as React from 'react';
import { Div } from '../../components/Div';
import { NoSuggestionsProps } from './types';

export const NoSuggestions = ({ className, noSuggestionsNode = null }: NoSuggestionsProps): React.ReactElement => (
  <Div className={className}>{ noSuggestionsNode }</Div>
);
