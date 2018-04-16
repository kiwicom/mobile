// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Color,
  TextInput,
  WithStorage,
} from '@kiwicom/mobile-shared';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import { graphql } from 'react-relay';
import { connect } from '@kiwicom/mobile-redux';

import RecentSearches from './RecentSearches';
import SuggestionList from './SuggestionList';
import type { LocationPickerScreen_cities_QueryResponse as LocationSuggestions } from './__generated__/LocationPickerScreen_cities_Query.graphql';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: Color.white,
    padding: 10,
  },
  input: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#c0c8d1',
    paddingLeft: 11,
    paddingBottom: 10,
    paddingTop: 13,
  },
});

const RECENT_SEARCH_KEY = 'KiwiHotels:RecentSearches';

export type Location = {|
  id: string,
  name: string,
|};

type Props = {|
  storageValue: Location[],
  saveToStorage: (value: any) => void,
  onCitySelected: (cityId: string, cityName: string) => void,
  location: ?string,
  closeModal: () => void,
|};

type State = {|
  search: string,
|};

export class LocationPicker extends React.Component<Props, State> {
  state = {
    search: '',
  };

  componentDidMount = () => {
    this.setState({ search: this.props.location || '' });
  };

  onTextChange = (search: string) => {
    this.setState({ search });
  };

  onCitySelected = (cityId: string, cityName: string) => {
    this.props.onCitySelected(cityId, cityName);
    this.saveRecentSearches(cityId, cityName);
    this.props.closeModal();
  };

  saveRecentSearches = (cityId: string, cityName: string) => {
    let recentSearches = this.props.storageValue;

    if (recentSearches.find(item => item.id === cityId) === undefined) {
      recentSearches.unshift({ id: cityId, name: cityName });
      recentSearches.slice(0, 20); // Limit recent searches to 20 locations

      this.props.saveToStorage(recentSearches);
    }
  };

  renderSuggestions = (rendererProps: LocationSuggestions) => {
    return (
      <SuggestionList
        data={rendererProps}
        onCitySelected={this.onCitySelected}
        search={this.state.search}
      />
    );
  };

  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={this.state.search}
            onChangeText={this.onTextChange}
            placeholder="Where"
            style={styles.input}
            placeholderTextColor={Color.textLight}
            autoFocus={true}
          />
        </View>
        {this.state.search === '' && this.props.storageValue.length > 0 ? (
          <RecentSearches
            locations={this.props.storageValue}
            onCitySelected={this.onCitySelected}
          />
        ) : (
          <PublicApiRenderer
            query={graphql`
              query LocationPickerScreen_cities_Query($prefix: String!) {
                ...SuggestionList_data @arguments(prefix: $prefix)
              }
            `}
            render={this.renderSuggestions}
            variables={{ prefix: this.state.search }}
          />
        )}
      </View>
    );
  };
}

const action = dispatch => ({
  onCitySelected: (cityId: string, cityName: string) =>
    dispatch({
      type: 'setLocationAndCityId',
      cityId,
      location: cityName,
    }),
});

export default connect(null, action)(
  WithStorage(LocationPicker, RECENT_SEARCH_KEY, []),
);
