import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay';
import environment from '../src/Environment';
import { StackNavigator } from 'react-navigation';

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

class AppWithRelay extends React.Component {
  static navigationOptions = {
    title: 'Welcome, Username',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('SearchResults', { param: 'XXX' })}
          title="Search Results"
        />
      </View>
    );
  }
}

class SearchResults extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Search Results ${navigation.state.params.param}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
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
          return (
            <View style={styles.container}>
              <Text>Loading</Text>
            </View>
          );
        }}
      />
    );
  }
}

export default StackNavigator(
  {
    Home: { screen: AppWithRelay },
    SearchResults: { screen: SearchResults },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#01bba5',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff', // what is this?
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
