// @flow

import { DateUtils } from '@kiwicom/mobile-localization';

import { AllHotels } from '../AllHotels';

describe('AllHotels', () => {
  it('calls onSearchChange with passed dates', () => {
    const setSearch = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      setSearch,
      checkin: DateUtils().addDays(1),
      checkout: DateUtils().addDays(5),
    });

    Component.componentDidMount();
    expect(setSearch).toHaveBeenCalled();
  });

  it('does not call onSearchChange if checkin is before today', () => {
    const setSearch = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      setSearch,
      checkin: DateUtils().addDays(-1),
      checkout: DateUtils().addDays(5),
    });

    Component.componentDidMount();
    expect(setSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearchChange if dates are missing', () => {
    const setSearch = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      setSearch,
    });

    Component.componentDidMount();
    expect(setSearch).not.toHaveBeenCalled();
  });
});
