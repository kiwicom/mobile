// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Translation } from '@kiwicom/mobile-localization';

import ButtonPopup from '../ButtonPopup';
import Touchable from '../../Touchable';
import Dimensions from '../../view/Dimensions';

const renderPopup = (onSave, onClose) =>
  renderer.create(
    <Dimensions.Provider dimensions={{ width: 500, height: 700 }}>
      <ButtonPopup
        buttonTitle={<Translation passThrough="Save" />}
        buttonCloseTitle={<Translation passThrough="Close" />}
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

    expect(onSave).toBeCalled();
    expect(onClose).toBeCalled();
  });
});
