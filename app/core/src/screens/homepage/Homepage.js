// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, LayoutWithoutHeader } from '@kiwicom/react-native-app-common';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

export default class Homepage extends React.Component<Props, {}> {
  goToAllHotelsPage = () => this.props.navigation.navigate('AllHotels');

  render = () => {
    return (
      <View style={styles.container}>
        <FlightsSearchOverlay navigation={this.props.navigation} />

        <LayoutWithoutHeader>
          <Button title="All hotels search" onPress={this.goToAllHotelsPage} />
        </LayoutWithoutHeader>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
