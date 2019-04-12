// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Translation from '../../Translation';
import ButtonPopup from '../ButtonPopup';
import Touchable from '../../Touchable';
import Dimensions from '../../view/Dimensions';
import CloseButton from '../../buttons/CloseButton';

jest.mock('Dimensions', () => ({
  get: () => ({ width: 500, height: 500 }),
}));

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <Dimensions.Provider>
      <ButtonPopup
        buttonTitle={<Translation passThrough="Save" />}
        isVisible={true}
        onSave={onSave}
        onClose={onClose}
      >
        <Translation passThrough="Child" />
      </ButtonPopup>
    </Dimensions.Provider>,
  );

describe('ButtonPopup', () => {
  it('save button should call onSave', async () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    const testRenderer = renderPopup(onSave, onClose);
    const testInstance = testRenderer.root;
    await testInstance.findAllByType(Touchable).forEach(async child => {
      await child.props.onPress();
    });

    expect(onSave).toBeCalledWith();
    expect(onClose).not.toBeCalled();
  });

  it('close button should call onClose', async () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    const testRenderer = renderPopup(onSave, onClose);
    const testInstance = testRenderer.root;
    await testInstance.findAllByType(CloseButton).forEach(async child => {
      await child.props.onPress();
    });

    expect(onSave).not.toBeCalled();
    expect(onClose).toBeCalledWith();
  });
});
