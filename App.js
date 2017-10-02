import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay';
import environment from './src/Environment';

const AppAllFlightsQuery = graphql`
  query AppAllFlightsQuery($search: FlightsSearchInput!) {
    allFlights(search: $search) {
      ...App_flights
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.flights.edges.map(({ node }) => (
          <Text>
            {node.price.amount} {node.price.currency} from{' '}
            {node.departure.airport.locationId} to{' '}
            {node.arrival.airport.locationId}
          </Text>
        ))}
      </View>
    );
  }
}

const AppWithFragments = createFragmentContainer(
  App,
  graphql`
    fragment App_flights on FlightConnection {
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

export default class AppWithRelay extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppAllFlightsQuery}
        variables={{
          search: {
            from: { location: 'PRG' },
            to: { location: 'BCN' },
            date: { exact: '2017-11-11' },
          },
        }}
        render={({ error, props }) => {
          if (error) {
            return <Text>{error.message}</Text>;
          } else if (props) {
            return <AppWithFragments flights={props.allFlights} />;
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
