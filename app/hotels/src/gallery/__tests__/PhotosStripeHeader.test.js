// @flow

import * as React from 'react';

import PlaygroundRenderer from '../../../../PlaygroundRenderer';
import PhotosStripeHeader from '../PhotosStripeHeader';

const VoidAction = () => {};

it('renders header with title', () => {
  PlaygroundRenderer.render(
    <PhotosStripeHeader
      photoNumber={2}
      totalPhotos={42}
      hotelName="Hotel Name"
      onClose={VoidAction}
    />,
  );
});

it('renders header with very long title', () => {
  PlaygroundRenderer.render(
    <PhotosStripeHeader
      photoNumber={2}
      totalPhotos={42}
      hotelName="Hotel Name So Long That It Will Not Fit One Line And Needs To Be Wrapped"
      onClose={VoidAction}
    />,
  );
});
