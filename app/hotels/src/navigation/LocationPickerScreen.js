// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  Touchable,
  StyleSheet,
  Color,
  TextInput,
  WithStorage,
} from '@kiwicom/react-native-app-shared';
import {
  type NavigationType,
  HeaderTitle,
} from '@kiwicom/react-native-app-navigation';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import { connect } from '@kiwicom/react-native-app-redux';
import Translation from '@kiwicom/react-native-app-translations';
import { graphql } from 'react-relay';
import idx from 'idx';

import type { LocationPickerScreen_cities_QueryResponse as LocationSuggestions } from './__generated__/LocationPickerScreen_cities_Query.graphql';
import SuggestionList from '../allHotels/searchForm/locationPicker/SuggestionList';
import RecentSearches from '../allHotels/searchForm/locationPicker/RecentSearches';

export type Location = {|
  id: string,
  name: string,
|};

type Props = {|
  navigation: NavigationType,
  onCitySelected: (cityId: string, cityName: string) => void,
  storageValue: Location[],
  saveToStorage: (value: any) => void,
|};

type NavigationProps = {|
  cityId: string,
  cityName: string,
  navigation: NavigationType,
|};

type State = {|
  search: string,
|};

const styles = StyleSheet.create({
  cancelButton: {
    padding: 8,
  },
  headerButtonText: {
    fontSize: 17,
    color: Color.white,
    lineHeight: 20,
    ios: {
      fontFamily: 'SFProText-Regular',
    },
  },
  confirmButtonText: {
    ios: {
      fontFamily: 'SFProText-Semibold',
    },
    android: {
      fontWeight: '600',
    },
  },
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

export class LocationPicker extends React.Component<Props, State> {
  state = {
    search: '',
  };

  static navigationOptions = ({ navigation }: NavigationProps) => {
    function goBack() {
      navigation.goBack();
    }

    function headerLeft() {
      return (
        <Touchable
          borderlessRipple={true}
          onPress={goBack}
          style={styles.cancelButton}
        >
          <Text style={[styles.headerButtonText, styles.confirmButtonText]}>
            <Translation id="hotels_search.location_picker.cancel" />
          </Text>
        </Touchable>
      );
    }

    return {
      headerLeft: headerLeft(),
      title: (
        <HeaderTitle>
          <Translation id="hotels_search.location_picker.header" />
        </HeaderTitle>
      ),
    };
  };

  componentDidMount = () => {
    const location =
      idx(this.props.navigation, _ => _.state.params.location) || '';
    this.setState({ search: location });
  };

  onTextChange = (search: string) => {
    this.setState({ search });
  };

  onCitySelected = (cityId: string, cityName: string) => {
    this.props.onCitySelected(cityId, cityName);
    this.props.navigation.goBack();
    this.saveRecentSearches(cityId, cityName);
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
