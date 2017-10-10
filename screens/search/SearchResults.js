import React from 'react';
import { Text, View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

import Styles from '../../src/Styles';

class SearchResults extends React.PureComponent {
  render = () => {
    return (
      <View style={Styles.container}>
        {this.props.flights.edges.map(({ node }) => (
          <Text>
            {node.price.amount} {node.price.currency} from{' '}
            {node.departure.airport.locationId} to{' '}
            {node.arrival.airport.locationId}
          </Text>
        ))}
      </View>
    );
  };
}

export default createFragmentContainer(
  SearchResults,
  graphql`
    fragment SearchResults_flights on FlightConnection {
      # <FileName>_<propName>
      edges {
        node {
          price {
            amount
            currency
          }
          departure {
            airport {
              locationId
            }
          }
          arrival {
            airport {
              locationId
            }
          }
        }
      }
    }
  `,
);
