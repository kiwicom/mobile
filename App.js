import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay';
import environment from './src/Environment';

const AppAllFlightsQuery = graphql`
  query AppAllFlightsQuery($search: FlightsSearchInput!) {
    allFlights(search: $search) {
      edges {
        node {
          ...App_flights
        }
      }
    }
  }
`;

class App extends React.Component {
  render() {
    console.warn(JSON.stringify(this.props.flights)); // FIXME - make it useful
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const AppWithFragments = createFragmentContainer(
  App,
  graphql`
    fragment App_flights on Flight {
      # <FileName>_<propName>
      price {
        amount
        currency
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
            return (
              <AppWithFragments flights={props.allFlights.edges[0].node} /> // FIXME - realy way!
            );
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
