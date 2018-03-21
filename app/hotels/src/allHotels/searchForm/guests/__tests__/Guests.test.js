// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { IncrementDecrementButtons } from '@kiwicom/react-native-app-shared';

import Guests from '../Guests';
import type { RoomConfigurationType } from '../../SearchParametersType';

const renderGuests = (onSave: Function) => {
  const guests: RoomConfigurationType = {
    adultsCount: 1,
    children: [],
  };
  return renderer.create(<Guests onChange={onSave} guests={guests} />);
};

const shallowRenderGuests = (onSave: Function) => {
  const renderer = new ShallowRenderer();
  const guests: RoomConfigurationType = {
    adultsCount: 3,
    children: [],
  };
  return renderer.render(<Guests onChange={onSave} guests={guests} />);
};

describe('Guests', () => {
  it('Render all inputs', async () => {
    const renderer = shallowRenderGuests(jest.fn());
    expect(renderer).toMatchSnapshot();
  });

  it('count should be changed after increments and onSave call', async () => {
    expect.assertions(1);

    const onSave = jest.fn();
    const testRenderer = renderGuests(onSave);
    const testInstance = testRenderer.root;

    // Increment adultsCount by 2
    const buttons = testInstance.findAllByType(IncrementDecrementButtons)[0];
    await buttons.props.onIncrement();
    await buttons.props.onIncrement();

    // Save guests count
    await testInstance
      .findByProps({ testID: 'guestsPopupSaveButton' })
      .props.onSave();

    expect(onSave).toBeCalledWith({ adultsCount: 3, children: [] });
  });
});
