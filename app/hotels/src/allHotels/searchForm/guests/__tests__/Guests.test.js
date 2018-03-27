// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Guests from '../Guests';
import type { RoomConfigurationType } from '../../SearchParametersType';

const shallowRenderGuests = (openGuestsModal: Function) => {
  const renderer = new ShallowRenderer();
  const guests: RoomConfigurationType = {
    adultsCount: 3,
    children: [],
  };
  return renderer.render(
    <Guests openGuestsModal={openGuestsModal} guests={guests} />,
  );
};

describe('Guests', () => {
  it('Render all inputs', async () => {
    const renderer = shallowRenderGuests(jest.fn());
    expect(renderer).toMatchSnapshot();
  });
});
