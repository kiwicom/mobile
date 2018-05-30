// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { VisaInformation } from '../VisaInformation';
import VisaOk from '../VisaOk';
import VisaRequired from '../VisaRequired';
import VisaWarning from '../VisaWarning';

const defaultProps = {
  visa: {
    visaInformation: {
      requiredIn: [],
      warningIn: [],
    },
    isPastBooking: false,
  },
};

describe('VisaInformation', () => {
  it('renders null for past bookings', () => {
    const props = {
      ...defaultProps,
      isPastBooking: true,
    };
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const wrapper = renderer.create(<VisaInformation {...props} />);

    expect(wrapper.toTree().rendered).toBe(null);
  });

  it('renders visa ok when requiredIn and warningIn contains no elements', () => {
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const wrapper = renderer.create(<VisaInformation {...defaultProps} />);

    expect(wrapper.root.findByType(VisaOk)).toBeDefined();
    expect(() => {
      wrapper.root.findByType(VisaRequired);
    }).toThrow();
    expect(() => {
      wrapper.root.findByType(VisaWarning);
    }).toThrow();
  });

  it('renders visa warning and visa required when they contain elements', () => {
    const props = {
      ...defaultProps,
      visa: {
        visaInformation: {
          requiredIn: [{ name: 'Norway' }],
          warningIn: [{ name: 'Sweden' }],
        },
      },
    };
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    const wrapper = renderer.create(<VisaInformation {...props} />);

    expect(wrapper.root.findByType(VisaRequired)).toBeDefined();
    expect(wrapper.root.findByType(VisaWarning)).toBeDefined();
    expect(() => {
      wrapper.root.findByType(VisaOk);
    }).toThrow();
  });
});
