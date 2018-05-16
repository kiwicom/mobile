// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import { Passenger } from '../Passenger';

it('renders', () => {
  PlaygroundRenderer.render(
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    <Passenger
      passenger={{
        fullName: 'Trond Bergquist',
        title: 'Mr',
        birthday: '1984-05-10T00:00:00.000Z',
        nationality: 'no',
        travelDocument: {
          idNumber: '123456',
        },
        insuranceType: 'TRAVEL_PLUS',
      }}
    />,
  );
});
