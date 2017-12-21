// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Rating from '../Rating';

describe('formatRating', () => {
  it('concats stars, review score and review description', () => {
    expect(
      renderer
        .create(<Rating stars={3} score={8.6} description="Good Enough" />)
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('omits the dash when stars are missing', () => {
    expect(
      renderer
        .create(<Rating score={8.6} description="Good Enough" />)
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('omits the dash when review is missing', () => {
    expect(renderer.create(<Rating stars={5} />).toJSON()).toMatchSnapshot();
  });
});
