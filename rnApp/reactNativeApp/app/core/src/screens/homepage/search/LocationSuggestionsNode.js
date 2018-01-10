// @flow

import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import { SimpleCard } from '@kiwicom/react-native-app-common';

import type { LocationSuggestionsNode as LocationSuggestionsNodeType } from './__generated__/LocationSuggestionsNode.graphql';

type Props = {|
  data: LocationSuggestionsNodeType,
  onPress: (locationId: string, locationName: string) => void,
|};

class LocationSuggestionsNode extends React.Component<Props> {
  handleOnPress = () => {
    const { onPress, data } = this.props;
    return onPress(data.locationId || '', data.name || '');
  };

  render = () => {
    return (
      <SimpleCard>
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text>{this.props.data.name}</Text>
        </TouchableOpacity>
      </SimpleCard>
    );
  };
}

export default createFragmentContainer(
  LocationSuggestionsNode,
  graphql`
    fragment LocationSuggestionsNode on Location {
      locationId
      name
    }
  `,
);
