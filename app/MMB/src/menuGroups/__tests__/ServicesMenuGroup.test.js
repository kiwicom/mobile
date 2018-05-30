// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { ServicesMenuGroup } from '../ServicesMenuGroup';

describe('ServicesMenuGroup', () => {
  it('renders with future trip', () => {
    const wrapper = renderer.create(
      <ServicesMenuGroup
        openSubmenu={jest.fn()}
        activeId="123"
        isPastBooking={false}
      />,
    );

    expect(
      wrapper.root.findByProps({ testID: 'flightServices' }),
    ).toBeDefined();
  });

  it('renders with past trip', () => {
    const wrapper = renderer.create(
      <ServicesMenuGroup
        openSubmenu={jest.fn()}
        activeId="123"
        isPastBooking={true}
      />,
    );

    expect(() => {
      wrapper.root.findByProps({ testID: 'flightServices' });
    }).toThrow();
  });
});
