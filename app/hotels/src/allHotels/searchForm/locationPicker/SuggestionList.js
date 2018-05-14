// @flow

import * as React from 'react';
import { FlatList, View, Keyboard } from 'react-native';
import idx from 'idx';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import SuggestionListItem from './SuggestionListItem';
import type { SuggestionList_data } from './__generated__/SuggestionList_data.graphql';

type Props = {|
  data: SuggestionList_data,
  onCitySelected: (cityId: string | null, cityName: ?string) => void,
  search: string,
|};

type ListItemType = {|
  node: {
    id: string,
    name: ?string,
  },
|};

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 20,
  },
});

export class SuggestionList extends React.Component<Props> {
  keyExtractor = (item: ListItemType) => {
    const city = idx(item, _ => _.node) || {};
    return city.id;
  };

  renderItem = ({ item }: { item: ListItemType }) => {
    const city = idx(item, _ => _.node);

    if (city == null) {
      return null;
    }

    return (
      <SuggestionListItem
        city={city}
        onCitySelected={this.props.onCitySelected}
        search={this.props.search}
      />
    );
  };

  render = () => (
    <FlatList
      data={idx(this.props.data, _ => _.hotelCities.edges)}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}
      ListHeaderComponent={<View style={styles.listHeader} />}
      onScroll={Keyboard.dismiss}
      keyboardShouldPersistTaps="handled"
    />
  );
}

export default createFragmentContainer(SuggestionList, {
  data: graphql`
    fragment SuggestionList_data on RootQuery
      @argumentDefinitions(prefix: { type: "String" }) {
      hotelCities(prefix: $prefix, first: 50)
        @connection(key: "SuggestionList_hotelCities") {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `,
});
