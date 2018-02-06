// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import GuestsPopup from '../GuestsPopup';
import type { RoomConfigurationType } from '../../SearchParametersType';

const shallowRenderGuestsPopup = (onClose: Function) => {
  const renderer = new ShallowRenderer();
  const guests: RoomConfigurationType = {
    adultsCount: 3,
    children: [],
  };
  return renderer.render(
    <GuestsPopup
      onClose={onClose}
      isVisible
      onChange={jest.fn()}
      guests={guests}
    />,
  );
};

const renderGuestsPopup = (onClose: Function) => {
  const guests: RoomConfigurationType = {
    adultsCount: 1,
    children: [],
  };
  return renderer.create(
    <GuestsPopup
      onClose={onClose}
      isVisible
      onChange={jest.fn()}
      guests={guests}
    />,
  );
};

describe('GuestsPopup', () => {
  it('Renders correctly', () => {
    const renderer = shallowRenderGuestsPopup(jest.fn());
    expect(renderer).toMatchSnapshot();
  });

  it('should call onClose from handleSave when child age is not missing', async () => {
    const onClose = jest.fn();
    const testRenderer = renderGuestsPopup(onClose);
    const testInstance = testRenderer.root;

    testInstance.instance.handleSave();

    expect(onClose).toHaveBeenCalled();
  });

  it('should not call onClose from handleSave when child age is missing', async () => {
    const onClose = jest.fn();
    const testRenderer = renderGuestsPopup(onClose);
    const testInstance = testRenderer.root;

    const isAgeMissingMock = jest.fn();
    isAgeMissingMock.mockReturnValue(true);
    testInstance.instance.isMissingAge = isAgeMissingMock;

    testInstance.instance.handleSave();

    expect(onClose).not.toHaveBeenCalled();
  });
});
