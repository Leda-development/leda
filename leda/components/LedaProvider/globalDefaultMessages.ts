import type { RecursivePartial } from '../../commonTypes';
import { defaultCalendarMessages } from '../../src/CalendarBase/messages';

export const globalDefaultMessages = {
  calendar: defaultCalendarMessages,
};

export type PartialGlobalDefaultMessages = RecursivePartial<typeof globalDefaultMessages>;
