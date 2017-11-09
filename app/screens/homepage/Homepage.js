// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

export default class Homepage extends React.Component<Props, {}> {
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
        <FlightsSearchOverlay navigation={this.props.navigation} />
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
