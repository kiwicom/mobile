// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import { SuggestionList } from '../SuggestionList';

// $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
const data = {
  hotelCities: {
    edges: [],
  },
};

for (let i = 1; i < 51; i++) {
  data.hotelCities.edges.push({
    node: {
      id: `${i}`,
      name: `City mock ${i}`,
    },
  });
}

function noop() {}

describe('SuggestionList', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <SuggestionList data={data} search="" onCitySelected={noop} />,
    );
  });
});
