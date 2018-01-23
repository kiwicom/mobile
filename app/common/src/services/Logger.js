// @flow

/**
 * This module will be replaced by code that calls native modules when native guys provides us native code
 * This code can be used as a mock later
 * Example of use:
 * import { Logger } from '@kiwicom/react-native-app-common';
 * Logger.LogEvent(Logger.Event.Displayed, Logger.Category.Ancillary, {
      type: 'Hotels',
      step: 'searchForm',
      hasActiveBooking: false,
      implementation: 'react',
    });
    See also in https://confluence.kiwi.com/display/MOB/Semi+native+hotels#Seminativehotels-Logging
 */

export const Event = {
  Displayed: 1,
  Purchased: 2,
};
export const Category = {
  Ancillary: 1,
};

type EventType = $Values<typeof Event>;
type CategoryType = $Values<typeof Category>;

export function LogEvent(
  event: EventType,
  category: CategoryType,
  parameters?: Object,
  value?: number,
) {
  console.log('debug: ', event, category, parameters, value); //eslint-disable-line
}

const Logger = {
  Event,
  Category,
  LogEvent,
};

export default Logger;
