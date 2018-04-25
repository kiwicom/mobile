// @flow

import { DateFormatter } from '@kiwicom/mobile-localization';

import { AllHotels } from '../AllHotels';

describe('AllHotels', () => {
  it('calls onSearchChange with passed dates', () => {
    const setSearch = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      setSearch,
      checkin: DateFormatter()
        .add(1, 'day')
        .toDate(),
      checkout: DateFormatter()
        .add(5, 'day')
        .toDate(),
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
      checkin: DateFormatter()
        .subtract(1, 'day')
        .toDate(),
      checkout: DateFormatter()
        .add(5, 'day')
        .toDate(),
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
