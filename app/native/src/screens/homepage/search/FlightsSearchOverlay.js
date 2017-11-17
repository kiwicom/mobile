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

  render = () => {
    return (
      <View style={{ height: 150, zIndex: 1 }}>
        <SearchHeader
          key="header"
          onSend={searchParameters => {
            this.props.navigation.navigate('SearchResults', searchParameters);
          }}
          onToggle={() => {
            this.setState({ overlayExpanded: !this.state.overlayExpanded });
          }}
        />
        <LocationSuggestionsWrapper
          key="suggestions"
          visible={this.state.overlayExpanded}
        />
      </View>
    );
  };
}
