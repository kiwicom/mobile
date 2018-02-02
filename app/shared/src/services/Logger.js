// @flow

/**
 * This module will be replaced by code that calls native modules when native
 * guys provides us native code This code can be used as a mock later Example
 * of use:
 *
 * ```
 * import { Logger } from '@kiwicom/react-native-app-shared';
 *
 * Logger.LogEvent(Logger.Event.Displayed, Logger.Category.Ancillary, {
 *   type: 'Hotels',
 *   step: 'searchForm',
 *   hasActiveBooking: false,
 * });
 * ```
 *
 * See also in https://confluence.kiwi.com/display/MOB/Semi+native+hotels#Seminativehotels-Logging
 */

const Event = {
  Displayed: 1,
  Purchased: 2,
};

const Category = {
  Ancillary: 1,
};

type EventType = $Values<typeof Event>;
type CategoryType = $Values<typeof Category>;

function LogEvent(
  event: EventType,
  category: CategoryType,
  parameters?: Object,
) {
  const extendedParameters = {
    implementation: 'react',
    ...parameters,
  };
  console.log('debug: ', event, category, extendedParameters); //eslint-disable-line
}

export default {
  Event,
  Category,
  LogEvent,
};
