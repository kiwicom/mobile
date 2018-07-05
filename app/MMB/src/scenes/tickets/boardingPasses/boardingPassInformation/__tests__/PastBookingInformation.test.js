// @flow strict

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import PastBookingInformation from '../PastBookingInformation';

const renderer = new ShallowRenderer();

const getWrapper = (
  boardingPassAvailable: Date | null,
  boardingPassUrl: ?string,
) =>
  renderer.render(
    <PastBookingInformation
      boardingPassAvailableDate={boardingPassAvailable}
      boardingPassUrl={boardingPassUrl}
    />,
  );

describe('PastBoookingInformation', () => {
  it('returns null if boarding pass available is null', () => {
    const wrapper = getWrapper(null, 'some string');
    expect(wrapper).toBe(null);
  });

  it('returns null if boarding pass url is not defined', () => {
    const wrapper = getWrapper(new Date(), undefined);
    expect(wrapper).toBe(null);

    const wrapper2 = getWrapper(new Date(), null);
    expect(wrapper2).toBe(null);
  });

  it('returns a translation if boardingPassAvailable and boarding pass url is defined', () => {
    const wrapper = getWrapper(new Date(), 'string');
    expect(wrapper.props.id).toBe(
      'mmb.boarding_passes.past_booking_information.missed_checkin',
    );
  });
});
