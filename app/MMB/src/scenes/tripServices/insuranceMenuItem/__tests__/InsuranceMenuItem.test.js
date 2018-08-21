// @flow

import { Alert } from '@kiwicom/mobile-localization';
import MockDate from 'mockdate';

import { InsuranceMenuItem } from '../InsuranceMenuItem';

describe('InsuranceMenuItem', () => {
  let spy;
  beforeEach(() => {
    MockDate.set('2016-12-21T23:36:07.071Z');
    spy = jest.spyOn(Alert, 'translatedAlert');
  });

  afterEach(() => {
    spy.mockRestore();
    MockDate.reset();
  });

  function noop() {}

  it('shows alert if 48 hours before first departure', () => {
    const data = {
      departure: {
        time: '2016-12-22T23:36:07.071Z',
      },
    };

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItem = new InsuranceMenuItem({
      data,
      onOpenInsurance: noop,
    });

    const spyOpenInsurance = jest.spyOn(
      insuranceMenuItem.props,
      'onOpenInsurance',
    );
    expect(insuranceMenuItem.isMoreThan48HoursBefore()).toBe(false);
    insuranceMenuItem.onPress();
    expect(spy).toHaveBeenCalled();
    expect(spyOpenInsurance).not.toHaveBeenCalled();
    spyOpenInsurance.mockRestore();
  });

  it('does not show alert if at least 48 hours before first departure', () => {
    const data = {
      departure: {
        time: '2016-12-24T23:36:07.071Z',
      },
    };

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const insuranceMenuItem = new InsuranceMenuItem({
      data,
      onOpenInsurance: noop,
    });

    const spyOpenInsurance = jest.spyOn(
      insuranceMenuItem.props,
      'onOpenInsurance',
    );

    expect(insuranceMenuItem.isMoreThan48HoursBefore()).toBe(true);
    insuranceMenuItem.onPress();
    expect(spy).not.toHaveBeenCalled();
    expect(spyOpenInsurance).toHaveBeenCalled();
    spyOpenInsurance.mockRestore();
  });
});
