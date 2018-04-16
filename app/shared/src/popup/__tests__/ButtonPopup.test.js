// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import { Touchable } from '@kiwicom/react-native-app-shared';
import { Translation } from '@kiwicom/react-native-app-localization';

import ButtonPopup from '../ButtonPopup';

const shallowRenderer = new ShallowRenderer();

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <ButtonPopup
      buttonTitle={<Translation passThrough="Save" />}
      isVisible={true}
      onSave={onSave}
      onClose={onClose}
    >
      <Translation passThrough="Child" />
    </ButtonPopup>,
  );

describe('ButtonPopup', () => {
  it('render popup with child', () => {
    shallowRenderer.render(
      <ButtonPopup
        buttonTitle={<Translation passThrough="Save" />}
        isVisible={true}
        onSave={jest.fn()}
        onClose={jest.fn()}
      >
        <Translation passThrough="Child" />
      </ButtonPopup>,
    );
    expect(shallowRenderer.getRenderOutput()).toMatchSnapshot();
  });

  it('save button should call onSave', async () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    const testRenderer = renderPopup(onSave, onClose);
    const testInstance = testRenderer.root;
    await testInstance.findByType(Touchable).props.onPress();

    expect(onSave).toBeCalled();
    expect(onClose).not.toBeCalled();
  });
});
