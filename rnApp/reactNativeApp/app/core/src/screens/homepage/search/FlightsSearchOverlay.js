// @flow

import * as React from 'react';
import { View } from 'react-native';

import SearchHeader from '../search/SearchHeader';
import LocationSuggestionsWrapper from './LocationSuggestionsWrapper';
import type { Navigation } from '../../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

type State = {
  /**
   * Expanded overlay means that header is expanded and location suggestions
   * are visible (shows up from the bottom). Overlay expansion is controlled
   * by tapping on the header.
   */
  overlayExpanded: boolean,
};

/**
 * This component is overlay for the map on homepage. It consists from search header
 * with ability to expand and with locations suggestions. The form is redirected to
 * the 'Search' page after successful submit.
 */
export default class FlightsSearchOverlay extends React.Component<
  Props,
  State,
> {
  state = {
    overlayExpanded: false,
  };

  handleHeaderSend = (searchParameters: {|
    from: string,
    to: string,
    date: Date,
  |}) => this.props.navigation.navigate('SearchResults', searchParameters);

  handleHeaderToggle = () =>
    this.setState(prevState => ({
      overlayExpanded: !prevState.overlayExpanded,
    }));

  render = () => {
    return (
      <View style={{ height: 170, zIndex: 1 }}>
        <SearchHeader
          key="header"
          onSend={this.handleHeaderSend}
          onToggle={this.handleHeaderToggle}
        />
        <LocationSuggestionsWrapper
          key="suggestions"
          visible={this.state.overlayExpanded}
        />
      </View>
    );
  };
}
