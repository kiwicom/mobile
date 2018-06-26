// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Touchable, Dimensions } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import ButtonPopup from '../ButtonPopup';

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <Dimensions.Provider dimensions={{ width: 500, height: 700 }}>
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
    await testInstance.findByType(Touchable).props.onPress();

    expect(onSave).toBeCalled();
    expect(onClose).not.toBeCalled();
  });
});
