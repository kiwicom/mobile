import React from 'react';
import { Text, View } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import Styles from '../../src/Styles';

import Environment from '../../src/Environment';
import SearchResultsContainer from './SearchResultsContainer';

export default class Search extends React.Component {
  static navigationOptions = ({ navigation: { state: { params } } }) => ({
    title: `Flights ${params.from} - ${params.to}`,
  });

  render = () => {
    const { params } = this.props.navigation.state;
    return (
      <View style={Styles.container}>
        <QueryRenderer
          environment={Environment}
          query={SearchAllFlightsQuery}
          variables={{
            search: {
              from: { location: params.from },
              to: { location: params.to },
              date: { exact: params.date },
            },
            count: 10,
          }}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>;
            } else if (props) {
              return <SearchResultsContainer flights={props} />;
            }
            return <Text>Loading...</Text>;
          }}
        />
      </View>
    );
  };
}

const SearchAllFlightsQuery = graphql`
  query SearchResultsQuery(
    $search: FlightsSearchInput!
    $count: Int!
    $after: String
  ) {
    ...SearchResults_flights
  }
`;
