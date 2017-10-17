// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-relay';

import SearchResultsContainer from './SearchResults';
import SimpleLoading from '../../components/visual/loaders/SimpleLoading';
import PublicApiRenderer from '../../components/relay/PublicApiRenderer';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

export default class Search extends React.Component<Props> {
  static navigationOptions = ({ navigation: { state: { params } } }) => ({
    title: `${params.from} - ${params.to}`,
  });

  render = () => {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <PublicApiRenderer
          query={SearchAllFlightsQuery}
          variables={{
            search: {
              from: { location: params.from.trim() },
              to: { location: params.to.trim() },
              date: { exact: new Date(params.date).toISOString().slice(0, 10) },
            },
            count: 10,
          }}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>; // TODO: error view
            } else if (props) {
              return <SearchResultsContainer flights={props} />;
            }
            return <SimpleLoading />;
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
