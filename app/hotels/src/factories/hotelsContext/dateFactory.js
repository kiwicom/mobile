// @flow strict

import { DateUtils } from '@kiwicom/mobile-localization';

type State = {|
  +checkin: ?Date,
  +checkout: ?Date,
|};

type Options = {|
  +state: State,
  +setState: ((State => State) | State) => void,
|};

type DateFactory = {|
  +checkin: ?Date,
  +checkout: ?Date,
  +setCheckin: Date => void,
  +setCheckout: Date => void,
|};

export default function dateFactory({ state, setState }: Options): DateFactory {
  const setCheckin = (inDate: Date) => {
    const checkin = DateUtils.stripTimeZoneOffset(inDate);

    setState((previousState: State) => {
      const checkout = previousState.checkout ?? DateUtils.getToday();
      const diffInDays = DateUtils.diffInDays(checkout, checkin);

      if (diffInDays > 30) {
        return {
          checkin,
          checkout: DateUtils(checkin).addDays(30),
        };
      }

      if (diffInDays <= 0) {
        return {
          checkin,
          checkout: DateUtils(checkin).addDays(1),
        };
      }

      return {
        checkin,
        checkout,
      };
    });
  };

  const setCheckout = (inDate: Date) => {
    const checkout = DateUtils.stripTimeZoneOffset(inDate);
    setState((previousState: State) => {
      const checkin = previousState.checkin ?? DateUtils.getToday();
      const diffInDays = DateUtils.diffInDays(checkout, checkin);

      if (diffInDays > 30) {
        return {
          checkout,
          checkin: DateUtils(checkout).addDays(-30),
        };
      }

      if (diffInDays <= 0) {
        return {
          checkout,
          checkin: DateUtils(checkout).addDays(-1),
        };
      }

      return {
        checkout,
        checkin,
      };
    });
  };
  return {
    checkin: state.checkin,
    checkout: state.checkout,
    setCheckin,
    setCheckout,
  };
}
