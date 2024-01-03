import type { RecursivePartial } from '../../commonTypes';
import { defaultCalendarMessages } from '../../src/CalendarBase/messages';
import { defaultAutoCompleteMessages } from '../AutoComplete/messages';
import { defaultPaginationMessages } from '../Pagination/messages';
import { defaultMultiSelectMessages } from '../MultiSelect/messages';

export const globalDefaultMessages = {
  autoComplete: defaultAutoCompleteMessages,
  calendar: defaultCalendarMessages,
  multiSelect: defaultMultiSelectMessages,
  pagination: defaultPaginationMessages,
};

export type PartialGlobalDefaultMessages = RecursivePartial<typeof globalDefaultMessages>;
