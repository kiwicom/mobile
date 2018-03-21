// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import { Touchable } from '@kiwicom/react-native-app-shared';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import Text from '../../Text';
import ButtonPopup from '../ButtonPopup';

const shallowRenderer = new ShallowRenderer();

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <ButtonPopup
      buttonTitle={<DummyTranslation id="Save" />}
      isVisible={true}
      onSave={onSave}
      onClose={onClose}
    >
      <Text>Child</Text>
    </ButtonPopup>,
  );

describe('ButtonPopup', () => {
  it('render popup with child', () => {
    shallowRenderer.render(
      <ButtonPopup
        buttonTitle={<DummyTranslation id="Save" />}
        isVisible={true}
        onSave={jest.fn()}
        onClose={jest.fn()}
      >
        <Text>Child</Text>
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
