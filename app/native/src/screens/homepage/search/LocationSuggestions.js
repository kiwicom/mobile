// @flow

import * as React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';
import { SimpleCard } from '@kiwicom/native-common';

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
            const { node } = edge;
            return (
              <SimpleCard key={node.locationId}>
                <TouchableOpacity
                  onPress={() =>
                    props.onLocationSelected(
                      node.locationId || '',
                      node.name || '',
                    )
                  }
                >
                  <Text>{node.name}</Text>
                </TouchableOpacity>
              </SimpleCard>
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
            name
          }
        }
      }
    }
  `,
);
