// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import ButtonPopup from '../ButtonPopup';

const shallowRenderer = new ShallowRenderer();

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <ButtonPopup
      buttonTitle="Save"
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
        buttonTitle="Save"
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
    await testInstance.findByType(TouchableOpacity).props.onPress();

    expect(onSave).toBeCalled();
    expect(onClose).not.toBeCalled();
  });

  it('press out of modal should call onClose', async () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    const testRenderer = renderPopup(onSave, onClose);
    const testInstance = testRenderer.root;
    await testInstance.findByType(TouchableWithoutFeedback).props.onPress();

    expect(onSave).not.toBeCalled();
    expect(onClose).toBeCalled();
  });
});
