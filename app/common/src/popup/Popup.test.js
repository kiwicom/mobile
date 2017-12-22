// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from '@kiwicom/react-native-app-common';

import Popup from './Popup';

const shallowRenderer = new ShallowRenderer();

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <Popup isVisible={true} onSave={onSave} onClose={onClose}>
      <Text>Child</Text>
    </Popup>,
  );

describe('Popup', () => {
  it('render popup with child', () => {
    shallowRenderer.render(
      <Popup isVisible={true} onSave={jest.fn()} onClose={jest.fn()}>
        <Text>Child</Text>
      </Popup>,
    );
    expect(shallowRenderer.getRenderOutput()).toMatchSnapshot();
  });

  it('save button should call onSave and onClose', async () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    const testRenderer = renderPopup(onSave, onClose);
    const testInstance = testRenderer.root;
    await testInstance.findByType(Button).props.onPress();

    expect(onSave).toBeCalled();
    expect(onClose).toBeCalled();
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
