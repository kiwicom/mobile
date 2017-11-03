// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

import SearchHeader from './search/SearchHeader';
import LocationSuggestions from './search/LocationSuggestions';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

type State = {
  searchExpanded: boolean,
};

export default class Homepage extends React.Component<Props, State> {
  state = {
    searchExpanded: false,
  };

  render = () => {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onPress={event => console.log(event.nativeEvent.coordinate)} // eslint-disable-line no-console
        >
          <MapView.Circle
            center={{
              latitude: 25.56,
              longitude: -100.23,
            }}
            radius={100000}
          />
        </MapView>
        <SearchHeader
          onSend={searchParameters => {
            this.props.navigation.navigate('SearchResults', searchParameters);
          }}
          onToggle={() => {
            this.setState({ searchExpanded: !this.state.searchExpanded });
          }}
        />
        <LocationSuggestions visible={this.state.searchExpanded} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
