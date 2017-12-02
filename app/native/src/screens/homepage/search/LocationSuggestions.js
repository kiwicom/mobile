// @flow

import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import LocationSuggestionsNode from './LocationSuggestionsNode';

import type { LocationSuggestions } from './__generated__/LocationSuggestions.graphql';

type Props = {|
  data: LocationSuggestions,
  onLocationSelected: (locationId: string, locationName: string) => void,
|};

const LocationSuggestionsWithoutData = (props: Props) => {
  const edges = idx(props, _ => _.data.allLocations.edges);

  if (edges) {
    return (
      <ScrollView>
        {edges.map(edge => {
          if (edge && edge.node) {
            return (
              <LocationSuggestionsNode
                key={edge.node.locationId}
                data={edge.node}
                onPress={props.onLocationSelected}
              />
            );
          }
          // TODO: is this correct assumption?
          return <Text key="failed">Cannot find any existing locations.</Text>;
        })}
      </ScrollView>
    );
  } else {
    return <Text>Cannot find any existing locations.</Text>;
  }
};

export default createFragmentContainer(
  LocationSuggestionsWithoutData,
  graphql`
    fragment LocationSuggestions on RootQuery {
      allLocations(search: $search, first: $count) {
        edges {
          node {
            locationId
            ...LocationSuggestionsNode
          }
        }
      }
    }
  `,
);
