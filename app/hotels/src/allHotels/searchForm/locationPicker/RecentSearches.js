// @flow

import * as React from 'react';
import { View, FlatList, Keyboard } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import RecentSearchItem from './RecentSearchItem';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

type Location = {|
  id: string,
  name: string,
|};

type Props = {|
  locations: Location[],
  onCitySelected: (cityId: string, cityName: string) => void,
|};

export default class RecentSearches extends React.Component<Props> {
  keyExtractor = (item: Location) => item.id;

  renderItem = ({ item }: {| item: Location |}) => (
    <RecentSearchItem
      location={item}
      onCitySelected={this.props.onCitySelected}
    />
  );

  render = () => {
    if (this.props.locations.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        <View style={styles.container}>
          <Translation id="hotels_search.location_picker.recent_search" />
        </View>
        <FlatList
          data={this.props.locations}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          onScroll={Keyboard.dismiss}
          keyboardShouldPersistTaps="handled"
        />
      </React.Fragment>
    );
  };
}
