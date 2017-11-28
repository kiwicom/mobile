// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';
import Button from '../../components/visual/buttons/Button';
import LayoutWithoutHeader from '../../components/visual/view/LayoutWithoutHeader';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

export default class Homepage extends React.Component<Props, {}> {
  render = () => {
    return (
      <View style={styles.container}>
        <FlightsSearchOverlay navigation={this.props.navigation} />

        <LayoutWithoutHeader>
          <Button
            title="All hotels search"
            onPress={() => this.props.navigation.navigate('AllHotels')}
          />
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
