// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { DateUtils } from '@kiwicom/mobile-localization';

import { ExploreVariant } from '../ExploreVariant';

const renderer = new ShallowRenderer();

const getWrapper = props => {
  // $FlowExpectedError: Passing just what is needed for test to run
  renderer.render(<ExploreVariant trip={props} />);
  return renderer.getRenderOutput();
};

let originalGetUtcNow;

beforeEach(() => {
  originalGetUtcNow = DateUtils.getUTCNow;
});

afterEach(() => {
  DateUtils.getUTCNow = originalGetUtcNow;
});

describe('ExploreVariant', () => {
  it('should render booking confirmed if it is more than 8 hours to departure', () => {
    DateUtils.getUTCNow = jest.fn(() => new Date(2018, 11, 24, 9, 59, 59, 0));
    const data = {
      departure: {
        time: new Date(2018, 11, 24, 18, 0, 0, 0),
      },
    };
    const wrapper = getWrapper(data);
    expect(wrapper.type.displayName).toEqual('Relay(BookingConfirmed)');
  });

  it('should render PriorToDeparture if it is 8 hours or less to departure', () => {
    DateUtils.getUTCNow = jest.fn(() => new Date(2018, 11, 24, 10, 0, 0, 0));
    const data = {
      departure: {
        time: new Date(2018, 11, 24, 18, 0, 0, 0),
      },
    };
    const wrapper = getWrapper(data);
    expect(wrapper.type.displayName).toEqual('Relay(PriorToDeparture)');
  });

  it('should render IsFlying if it is after departure and before arrival', () => {
    DateUtils.getUTCNow = jest.fn(() => new Date(2018, 11, 24, 18, 0, 0, 0));
    const data = {
      departure: {
        time: new Date(2018, 11, 24, 18, 0, 0, 0),
      },
      legs: [
        {
          departure: {
            time: new Date(2018, 11, 24, 18, 0, 0, 0),
          },
          arrival: {
            time: new Date(2018, 11, 24, 20, 0, 0, 0),
          },
        },
      ],
    };
    const wrapper = getWrapper(data);

    expect(wrapper.type.displayName).toEqual('Relay(IsFlying)');
  });
});
