// @flow strict

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { FutureBookingInformation } from '../FutureBookingInformation';
import type { FutureBookingInformation as BoardingPass } from '../__generated__/FutureBookingInformation.graphql';

const renderer = new ShallowRenderer();

const getWrapper = (
  isMissingPassengerId: boolean,
  data: BoardingPass,
  boardingPassAvailableDate: Date | null,
) =>
  renderer.render(
    <FutureBookingInformation
      isMissingPassengerId={isMissingPassengerId}
      data={data}
      boardingPassAvailableDate={boardingPassAvailableDate}
    />,
  );

describe('FutureBookingInformation', () => {
  it('renders correctly', () => {
    const wrapper = getWrapper(
      false,
      // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
      { boardingPassUrl: null },
      null,
    );

    expect(wrapper.props.id).toBe(
      'mmb.boarding_passes.future_booking_information.available',
    );

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const wrapper2 = getWrapper(false, { boardingPassUrl: null }, new Date());
    expect(wrapper2.props.id).toBe(
      'mmb.boarding_passes.future_booking_information.available_at_date',
    );

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const wrapper3 = getWrapper(true, { boardingPassUrl: '123' }, new Date());
    expect(wrapper3.props.id).toBe(
      'mmb.boarding_passes.future_booking_information.missing_information',
    );
  });
});
