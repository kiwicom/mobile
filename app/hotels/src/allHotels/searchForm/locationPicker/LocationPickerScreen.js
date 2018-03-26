// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  Touchable,
  StyleSheet,
  Color,
  TextInput,
} from '@kiwicom/react-native-app-shared';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import Translation from '@kiwicom/react-native-app-translations';
import { graphql } from 'react-relay';

import type { LocationPickerScreen_cities_QueryResponse as LocationSuggestions } from './__generated__/LocationPickerScreen_cities_Query.graphql';
import SuggestionList from './SuggestionList';

type Props = {|
  navigation: NavigationType,
|};

type NavigationProps = {|
  cityId: string,
  cityName: string,
  navigation: NavigationType,
|};

type State = {|
  search: string,
  cityId: string,
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
  confirmButton: {
    padding: 8,
    paddingRight: 10,
  },
  disabled: {
    opacity: 0.4,
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

export default class LocationPicker extends React.Component<Props, State> {
  state = {
    search: '',
    cityId: '',
  };

  static navigationOptions = ({
    navigation,
    cityId,
    cityName,
  }: NavigationProps) => {
    function goBack() {
      navigation.goBack();
    }

    function confirmClicked() {
      // Using navigation.navigate({ params }) actually renders the screen inside the modal
      // Solution is go back and pass an on select function from parent
      // https://github.com/react-navigation/react-navigation/issues/288#issuecomment-315684617
      goBack();
      navigation.state.params.onSelect(cityId, cityName);
    }

    function headerLeft() {
      return (
        <Touchable
          borderlessRipple
          onPress={goBack}
          style={styles.cancelButton}
        >
          <Text style={[styles.headerButtonText, styles.confirmButtonText]}>
            <Translation id="HotelsSearch.LocationPicker.cancel" />
          </Text>
        </Touchable>
      );
    }

    function headerRight() {
      return (
        <Touchable
          onPress={confirmClicked}
          style={styles.confirmButton}
          borderlessRipple
        >
          <Text style={styles.headerButtonText}>
            <Translation id="HotelsSearch.LocationPicker.confirm" />
          </Text>
        </Touchable>
      );
    }

    return {
      headerLeft: headerLeft(),
      title: 'Where',
      headerRight: headerRight(),
    };
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ cityId: '' });
  };

  onTextChange = (search: string) => {
    // Resetting cityId and cityName when typing
    // If user selects Rome, starts typing, we should disable input until user makes new selection
    this.setState({ search, cityId: '' });
    this.props.navigation.setParams({ cityId: '', cityName: '' });
  };

  onCitySelected = (cityId: string, cityName: string) => {
    this.setState({ search: cityName, cityId });
    this.props.navigation.setParams({ cityId, cityName });
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
          />
        </View>
        {!this.state.cityId && (
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
