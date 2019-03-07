// @flow strict

import React from 'react';
import renderer from 'react-test-renderer';

import FastTrackModal from '../FastTrackModal';

describe('FastTrackModal', () => {
  test('Should render correctly', () => {
    const onCloseModalFn = jest.fn();

    const component = renderer.create(
      <FastTrackModal
        isVisible={true}
        onCloseModal={onCloseModalFn}
        documentUrl={'https://www.kiwi.com'}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
