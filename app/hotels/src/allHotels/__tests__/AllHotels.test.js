// @flow

import { DateFormatter } from '@kiwicom/mobile-localization';

import { AllHotels } from '../AllHotels';

const DATE_FORMAT = 'YYYY-MM-DD';

describe('AllHotels', () => {
  it('calls onSearchChange with passed dates', () => {
    const onSearchChange = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      onSearchChange,
      checkin: DateFormatter()
        .add(1, 'day')
        .format(DATE_FORMAT),
      checkout: DateFormatter()
        .add(5, 'day')
        .format(DATE_FORMAT),
    });

    Component.componentDidMount();
    expect(onSearchChange).toHaveBeenCalled();
  });

  it('does not call onSearchChange if checkin is before today', () => {
    const onSearchChange = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      onSearchChange,
      checkin: DateFormatter()
        .subtract(1, 'day')
        .format(DATE_FORMAT),
      checkout: DateFormatter()
        .add(5, 'day')
        .format(DATE_FORMAT),
    });

    Component.componentDidMount();
    expect(onSearchChange).not.toHaveBeenCalled();
  });

  it('does not call onSearchChange if dates are missing', () => {
    const onSearchChange = jest.fn();
    // $FlowExpectedError: Only passing props needed for test to run
    const Component = new AllHotels({
      search: {},
      onSearchChange,
    });

    Component.componentDidMount();
    expect(onSearchChange).not.toHaveBeenCalled();
  });
});
