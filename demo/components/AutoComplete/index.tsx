import * as React from 'react';
import { Story } from '../Story';
import { Strings } from './Strings';
import { AllSuggestions } from './AllSuggestions';
import { Objects } from './Objects';
import { MinSearchLength } from './MinSearchLength';
import { Customization } from './Customization';
import { SearchFields } from './SearchFields';
import { GroupedObjects } from './GroupedObjects';

export const AutoComplete = () => (
  <Story title="AutoComplete">
    <Strings title="Строки в data" />
    <Objects title="Объекты в data" />
    <MinSearchLength title="minSearchLength={0}" />
    <Customization title="Customization" />
    <AllSuggestions title="AllSuggestions" />
    <SearchFields title="SearchFields" />
    <GroupedObjects title="GroupedObjects" />
  </Story>
);
