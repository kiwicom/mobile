// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { VisaInformation } from '../VisaInformation';
import VisaOk from '../VisaOk';
import VisaRequired from '../VisaRequired';
import VisaWarning from '../VisaWarning';

const defaultProps = {
  requiredIn: [],
  warningIn: [],
  isPastBooking: false,
};

describe('VisaInformation', () => {
  it('renders null for past bookings', () => {
    const props = {
      ...defaultProps,
      isPastBooking: true,
    };
    const wrapper = renderer.create(
      <VisaInformation {...props}>{false}</VisaInformation>,
    );

    expect(wrapper.toTree().rendered).toBeNull();
  });

  it('renders visa ok when requiredIn and warningIn contains no elements', () => {
    const wrapper = renderer.create(
      <VisaInformation {...defaultProps}>
        <VisaRequired countries={[]} />
        <VisaWarning countries={[]} />
      </VisaInformation>,
    );

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
      requiredIn: ['Norway'],
      warningIn: ['Norway'],
    };

    const wrapper = renderer.create(
      <VisaInformation {...props}>
        <VisaRequired countries={['Norway']} />
        <VisaWarning countries={['Norway']} />
      </VisaInformation>,
    );

    expect(wrapper.root.findByType(VisaRequired)).toBeDefined();
    expect(wrapper.root.findByType(VisaWarning)).toBeDefined();
    expect(() => {
      wrapper.root.findByType(VisaOk);
    }).toThrow();
  });
});
