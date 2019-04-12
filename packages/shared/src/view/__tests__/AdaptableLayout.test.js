// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import AdaptableLayout from '../AdaptableLayout';
import Dimensions from '../Dimensions';

it('renders empty element without props', () => {
  expect(
    Renderer.create(
      <Dimensions.Provider>
        <AdaptableLayout />
      </Dimensions.Provider>,
    ),
  ).toMatchSnapshot();
});
