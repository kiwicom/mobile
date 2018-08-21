// @flow

import { InsuranceMenuItemContainer } from '../InsuranceMenuItemContainer';

describe('InsuranceMenuItem', () => {
  function noop() {}

  it('should display if it is not a past booking, its status is confirmed, and no passengers are US citizens', async () => {
    const data = {
      __typename: 'BookingOneWay',
      isPastBooking: false,
      status: 'CONFIRMED',
      passengers: [
        {
          nationality: 'cz',
        },
        {
          nationality: 'cz',
        },
      ],
      trip: {
        departure: {
          time: '2016-12-24T23:36:07.071Z',
        },
      },
    };

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenu = new InsuranceMenuItemContainer({
      data: data,
      onOpenInsurance: noop,
    });
    expect(insuranceMenu.displayMenuItem()).toBe(true);
  });

  it('should not display if it is a past booking', () => {
    const dataPastBooking = {
      __typename: 'BookingOneWay',
      isPastBooking: true,
      status: 'CONFIRMED',
      passengers: [
        {
          nationality: 'cz',
        },
        {
          nationality: 'cz',
        },
      ],
      trip: {
        departure: {
          time: '2016-12-24T23:36:07.071Z',
        },
      },
    };

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItemPastBooking = new InsuranceMenuItemContainer({
      data: dataPastBooking,
      onOpenInsurance: noop,
    });
    expect(insuranceMenuItemPastBooking.displayMenuItem()).toBe(false);
  });

  it('should not display if the booking status is not confirmed', () => {
    const data = {
      __typename: 'BookingOneWay',
      isPastBooking: false,
      status: 'PENDING',
      passengers: [
        {
          nationality: 'cz',
        },
        {
          nationality: 'cz',
        },
      ],
      trip: {
        departure: {
          time: '2016-12-24T23:36:07.071Z',
        },
      },
    };

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItem = new InsuranceMenuItemContainer({
      data: data,
      onOpenInsurance: noop,
    });
    expect(insuranceMenuItem.displayMenuItem()).toBe(false);
  });

  it('should not display if at least one passenger is a US citizen', () => {
    const data = {
      __typename: 'BookingOneWay',
      isPastBooking: false,
      status: 'PENDING',
      passengers: [
        {
          nationality: 'US',
        },
        {
          nationality: 'cz',
        },
      ],
      trip: {
        departure: {
          time: '2016-12-24T23:36:07.071Z',
        },
      },
    };
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItem = new InsuranceMenuItemContainer({
      data: data,
      onOpenInsurance: noop,
    });
    expect(insuranceMenuItem.displayMenuItem()).toBe(false);
  });

  it('should get proper time depending on booking type', async () => {
    const dataMulticity = {
      __typename: 'BookingMulticity',
      isPastBooking: false,
      status: 'CONFIRMED',
      passengers: [
        {
          nationality: 'cz',
        },
        {
          nationality: 'cz',
        },
      ],
      trips: [
        {
          departure: {
            time: '2016-12-24T23:36:07.071Z',
          },
        },
        {
          departure: {
            time: '2016-12-25T23:36:07.071Z',
          },
        },
        {
          departure: {
            time: '2016-12-26T23:36:07.071Z',
          },
        },
      ],
    };

    const dataReturn = {
      __typename: 'BookingReturn',
      isPastBooking: false,
      status: 'CONFIRMED',
      passengers: [
        {
          nationality: 'cz',
        },
        {
          nationality: 'cz',
        },
      ],
      outbound: {
        departure: {
          time: '2016-12-24T23:36:07.071Z',
        },
      },
    };

    const dataOneWay = {
      __typename: 'BookingOneWay',
      isPastBooking: false,
      status: 'CONFIRMED',
      passengers: [
        {
          nationality: 'cz',
        },
        {
          nationality: 'cz',
        },
      ],
      trip: {
        departure: {
          time: '2016-12-24T23:36:07.071Z',
        },
      },
    };

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItemMulticity = new InsuranceMenuItemContainer({
      data: dataMulticity,
      onOpenInsurance: noop,
    });

    expect(insuranceMenuItemMulticity.getData()).toEqual({
      departure: {
        time: '2016-12-24T23:36:07.071Z',
      },
    });

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItemReturn = new InsuranceMenuItemContainer({
      data: dataReturn,
      onOpenInsurance: noop,
    });

    expect(insuranceMenuItemReturn.getData()).toEqual({
      departure: {
        time: '2016-12-24T23:36:07.071Z',
      },
    });

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItemOneWay = new InsuranceMenuItemContainer({
      data: dataOneWay,
      onOpenInsurance: noop,
    });

    expect(insuranceMenuItemOneWay.getData()).toEqual({
      departure: {
        time: '2016-12-24T23:36:07.071Z',
      },
    });
  });
});
