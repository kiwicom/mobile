// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import HotelSuggestions from '@kiwicom/native-hotels';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';
import CenteredView from '../../components/visual/view/CenteredView';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

export default class Homepage extends React.Component<Props, {}> {
  render = () => {
    return (
      <View style={styles.container}>
        <FlightsSearchOverlay navigation={this.props.navigation} />
        <CenteredView>
          <HotelSuggestions />
        </CenteredView>
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
